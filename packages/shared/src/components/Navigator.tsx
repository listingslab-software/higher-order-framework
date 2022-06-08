import * as React from 'react'
import { useTheme, useMediaQuery, Box, Grid, Typography } from '@mui/material'
import {
    useAppDispatch,
    useAppSelector,
    MiniButton,
    setCore,
    selectPersona,
} from '../listingslab-shared'

export default function Navigator() {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const persona = useAppSelector(selectPersona)
    let isSignedIn = false
    if (persona.data.user.uid) isSignedIn = true
    let mode = 'mini'
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    if (!isMobile) mode = 'maxi'
    if (mode === 'hidden') return null

    // TODO move all these vars into redux
    const HomeBtnData = {
        icon: 'home',
        label: 'Home',
        tooltip: 'Add to home screen',
        variant: 'text',
        onClick: () => {
            // console.warn(`Vanilla JS Add to Home Screen 
            // https://stackoverflow.com/questions/57595523/add-to-home-screen-menu-link`)
            let person = prompt("Please enter your name", "Harry Potter");
            if (person != null) {
                console.warn("Hello " + person + "! How are you today?")
            }
        },
    }
    const signinBtnData = {
        icon: 'adminOff',
        label: 'Sign in',
        tooltip: 'Sign in',
        variant: 'text',
        onClick: () => {
            dispatch(setCore({ key: `dialogSigninOpen`, value: true }))
        },
    }
    const menuItems = [
        {
            icon: 'work',
            label: 'Work',
            tooltip: 'Work',
            color: 'primary',
            onClick: () => {},
        },
        {
            icon: 'life',
            label: 'Life',
            tooltip: 'Life',
            color: 'primary',
            onClick: () => {},
        },
        {
            icon: 'balance',
            label: 'Balance',
            tooltip: 'Balance',
            color: 'primary',
            onClick: () => {},
        },
    ]

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ m: 1, display: 'flex' }}>
                    <Box sx={{ flexGrow: 1 }} />

                    <MiniButton data={HomeBtnData} />

                    {menuItems.map((item, i) => {
                        return <MiniButton key={`menuItem_${i}`} data={item} />
                    })}
                    <Box sx={{ flexGrow: 1 }} />
                </Box>
            </Grid>
        </Grid>
    )
}
