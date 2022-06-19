import * as React from 'react'
import {
    Box,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Divider,
} from '@mui/material'
import {
    Icon,
    navigateTo,
    useAppDispatch,
    useAppSelector,
    selectCore,
    unsignIn,
    setCore,
    MaxiButton,
    MiniButton,
} from '../listingslab-shared'

export default function AppMenu() {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const core = useAppSelector(selectCore)

    let signedIn = false
    if (core.data.uid) signedIn = true

    const appMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.warn("appMenuOpen")
        setAnchorEl(event.currentTarget)
    }

    const onItemClick = (item: string) => {
        switch (item) {
            case 'home':
                dispatch(navigateTo({ pathname: '/' }))
                break
            case 'work':
                dispatch(navigateTo({ pathname: '/work' }))
                break
            case 'life':
                dispatch(navigateTo({ pathname: '/life' }))
                break
            case 'balance':
                dispatch(navigateTo({ pathname: '/balance' }))
                break
            case 'signout':
                dispatch(unsignIn())
                break
            case 'signin':
                dispatch(setCore({ key: 'dialogSigninOpen', value: true }))
                break
            case 'cms':
                dispatch(setCore({ key: 'cmsDialogOpen', value: true }))
                break
            default:
        }
        appMenuClose()
    }

    const appMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <MiniButton
                data={{
                    label: 'Menu',
                    tooltip: 'Menu',
                    type: 'mini',
                    icon: 'menu',
                    color: 'primary',
                    onClick: appMenuOpen,
                }}
            />

            <Box sx={{ ml: 3 }}>
                <Menu
                    id="app-menu"
                    anchorEl={anchorEl}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={open}
                    onClose={appMenuClose}
                    MenuListProps={{
                        'aria-labelledby': 'app-button',
                    }}
                >
                    <MenuList sx={{ width: 250 }} dense>
                        <MenuItem
                            onClick={() => {
                                onItemClick('home')
                            }}
                        >
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="primary">
                                    <Icon icon="home" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                            <Typography variant="body2">⌘H</Typography>
                        </MenuItem>

                        <Divider />
                        <MenuItem
                            onClick={() => {
                                onItemClick('work')
                            }}
                        >
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="primary">
                                    <Icon icon="work" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Work</ListItemText>
                            <Typography variant="body2">⌘W</Typography>
                        </MenuItem>

                        <MenuItem
                            onClick={() => {
                                onItemClick('life')
                            }}
                        >
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="primary">
                                    <Icon icon="life" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Life</ListItemText>
                            <Typography variant="body2">⌘L</Typography>
                        </MenuItem>

                        <MenuItem
                            onClick={() => {
                                onItemClick('balance')
                            }}
                        >
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="primary">
                                    <Icon icon="balance" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Balance</ListItemText>
                            <Typography variant="body2">⌘B</Typography>
                        </MenuItem>

                        <Divider />

                        {signedIn ? (
                            <React.Fragment>
                                <MenuItem
                                    onClick={() => {
                                        onItemClick('cms')
                                    }}
                                >
                                    <ListItemIcon>
                                        <IconButton
                                            sx={{ mr: 1 }}
                                            color="primary"
                                        >
                                            <Icon icon="cms" />
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemText primary="Admin" />
                                    <Typography variant="body2">⌘A</Typography>
                                </MenuItem>
                                <Divider />
                            </React.Fragment>
                        ) : null}

                        {signedIn ? (
                            <MenuItem
                                onClick={() => {
                                    onItemClick('signout')
                                }}
                            >
                                <ListItemIcon>
                                    <IconButton sx={{ mr: 1 }} color="primary">
                                        <Icon icon="exit" />
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText>Sign out</ListItemText>
                                <Typography variant="body2"></Typography>
                            </MenuItem>
                        ) : (
                            <React.Fragment>
                                <MenuItem
                                    onClick={() => {
                                        onItemClick('signin')
                                    }}
                                >
                                    <ListItemIcon>
                                        <IconButton
                                            sx={{ mr: 1 }}
                                            color="primary"
                                        >
                                            <Icon icon="exit" />
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemText>Sign in</ListItemText>
                                    <Typography variant="body2"></Typography>
                                </MenuItem>
                            </React.Fragment>
                        )}
                    </MenuList>
                </Menu>
            </Box>
        </React.Fragment>
    )
}

/*

*/
