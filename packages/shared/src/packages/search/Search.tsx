import * as React from 'react'

import { Icon, AppMenu } from '../../listingslab-shared'

import { Paper, InputBase, Box, IconButton } from '@mui/material'

export default function Search() {
    return (
        <Box
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <AppMenu />

            <InputBase
                autoFocus
                onChange={(e) => {
                    e.preventDefault()
                    // console.warn("search", e.target.value)
                }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search files' }}
            />

            <IconButton
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                }}
                sx={{ p: '10px' }}
                aria-label="search"
            >
                <Icon icon="search" />
            </IconButton>
        </Box>
    )
}

/*
<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Icon icon="admin" />
      </IconButton>
*/