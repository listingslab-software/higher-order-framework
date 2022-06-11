import * as React from 'react'
import { useTheme, useMediaQuery, Box } from '@mui/material'
import {
    useAppDispatch,
    useAppSelector,
    MiniButton,
    MaxiButton,
    selectCore,
    navClick,
} from '../listingslab-shared'

const NavButton = (item) => {
    const { type } = item.data
    if (type === 'maxi') return <MaxiButton data={item.data} />
    return <MiniButton data={item.data} />
}

export default function Navigator() {
    let mode = 'mini'
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    if (!isMobile) mode = 'maxi'
    if (mode === 'hidden') return null
    const core = useAppSelector(selectCore)
    const { menuItems } = core.data.navigator
    //, border: "1px solid gold"
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            {menuItems.map((item, i) => {
                return (
                    <Box key={`menuItem_${i}`}>
                        <NavButton data={item} />
                    </Box>
                )
            })}
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    )
}
