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
    Tooltip,
    Divider,
} from '@mui/material'
import { 
    Icon, 
    navigateTo, 
    useAppDispatch, 
    useAppSelector, 
    selectPersona,
    unsignIn,
} from '../listingslab-shared'

export default function AppMenu() {


    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const persona = useAppSelector(selectPersona)
    
    let signedIn = false
    if (persona.data.user.uid) signedIn = true

    const onItemClick = (item: string) => {
        switch (item) {
            case 'home':
                dispatch(navigateTo({ pathname: '/' }))
                break
            case 'signout':
                dispatch(unsignIn())
                break
            case 'signin':
                console.warn("open signin dialog")
                // dispatch(navigateTo({ pathname: '/life' }))
                break
            default:
        }
        appMenuClose()
    }

    const appMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const appMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <Tooltip title="Open App Menu" color="secondary">
                <IconButton
                    color="primary"
                    id="app-button"
                    aria-controls={open ? 'app-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={appMenuOpen}
                >
                    <Icon icon="menu" />
                </IconButton>
            </Tooltip>
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

                        <MenuItem onClick={()=>{onItemClick("home")}}>
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="secondary">
                                    <Icon icon="home" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                            <Typography variant="body2">⌘H</Typography>
                        </MenuItem>

                        <Divider />

                        { signedIn ? <MenuItem onClick={()=>{onItemClick("signout")}}>
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="secondary">
                                    <Icon icon="exit" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Sign out</ListItemText>
                            <Typography variant="body2"></Typography>
                        </MenuItem> : <MenuItem onClick={()=>{onItemClick("signin")}}>
                            <ListItemIcon>
                                <IconButton sx={{ mr: 1 }} color="secondary">
                                    <Icon icon="exit" />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText>Sign in</ListItemText>
                            <Typography variant="body2"></Typography>
                        </MenuItem> }

                    </MenuList>
                </Menu>
            </Box>
        </React.Fragment>
    )
}
