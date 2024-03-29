import * as React from 'react'
import {
    Box,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import {
    useAppSelector,
    useAppDispatch,
    selectRoute,
    setCore,
    selectSSR,
    selectRefresh,
    selectAdmin,
    adminInit,
    selectCore,
    getPostBySlug,
    navigateTo,
    Icon,
    Cannatown,
} from './listingslab-shared'

export default function RouteEngine() {
    const dispatch = useAppDispatch()
    const route = useAppSelector(selectRoute)
    const ssr = useAppSelector(selectSSR)
    const core = useAppSelector(selectCore)
    const refresh = useAppSelector(selectRefresh)
    const cms = useAppSelector(selectAdmin)
    const thisUrl = window.location.href
    let thisSlug = `${thisUrl.replace(ssr[0].data.baseURL, '')}`
    if (thisSlug === '') thisSlug = '/'

    React.useEffect(() => {
        dispatch(setCore({ key: 'refresh', value: false }))
        const windowLocation = window.location
        const url = windowLocation.href
        let thatSlug = `${url.replace(ssr[0].data.baseURL, '')}`
        if (thatSlug === '') thatSlug = '/'
        if (!route) {
            dispatch(setCore({ key: 'route', value: { slug: thatSlug, url } }))
            dispatch(setCore({ key: 'refresh', value: true }))
        }
        if (route) {
            if (route.slug !== thatSlug) {
                dispatch(
                    setCore({ key: 'route', value: { slug: thatSlug, url } })
                )
            }
        }
    }, [refresh, route, ssr, dispatch])

    let post = null
    const { posts, sites, links, keywords, categories } = cms.bus

    if (!posts && !sites && !links && !keywords && !categories) {
        dispatch(adminInit())
    }
    if (posts) {
        if (!posts.list) return null
        const postList = posts.list
        if (postList) {
            post = getPostBySlug(thisSlug, postList)
        }
    }

    let signedIn = false
    if (core.data.uid) signedIn = true

    // const onPreviousClick = () => {
    //     dispatch(navigateTo({ pathname: '/' }))
    //     return true
    // }

    // const onNextClick = () => {
    //     dispatch(navigateTo({ pathname: '/work' }))
    //     return true
    // }

    let title = '404, brah.'
    let excerpt = `route ${thisSlug} not found.`
    let image = 'https://listingslab.com/svg/default.svg'
    let icon = 'error'
    let body = ''
    let previous = null
    let next = null

    if (post) {
        title = post.title
        excerpt = post.excerpt
        icon = post.icon
        image = post.image
        body = post.body
        previous = post.previous
        next = post.next
    }

    return (
        <Box sx={{ m: 0, minHeight: 90 }}>
            {image ? (
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                />
            ) : null}

            <CardHeader
                title={
                    <Typography variant="h5" sx={{ fontWeight: 'lighter' }}>
                        {title}
                    </Typography>
                }
                subheader={<Typography variant="body2">{excerpt}</Typography>}
                avatar={
                    <React.Fragment>
                        {previous ? (
                            <IconButton
                                onClick={() =>
                                    dispatch(navigateTo({ pathname: previous }))
                                }
                                color="primary"
                            >
                                <Icon icon="arrowl" />
                            </IconButton>
                        ) : null}
                    </React.Fragment>
                }
                action={
                    <React.Fragment>
                        {next === '/' ? (
                            <IconButton
                                onClick={() =>
                                    dispatch(navigateTo({ pathname: next }))
                                }
                                color="primary"
                            >
                                <Icon icon="arrowr" />
                            </IconButton>
                        ) : null}
                    </React.Fragment>
                }
            />
            <CardContent>
                <Typography variant="body2" sx={{ m: 0 }}>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </Typography>
            </CardContent>
        </Box>
    )
}

/*
<CardMedia component={Cannatown} height="200" alt={'title'} />
*/
