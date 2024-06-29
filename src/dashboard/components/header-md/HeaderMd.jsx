import { Avatar, Box, Sheet, Stack } from '@mui/joy'
import React from 'react'

export const HeaderMd = () => {
  return (
    <Box
        width={'100dvh'}
        bgcolor={'red'}
        gap={1}
    >
        <Stack>
            <Stack>
                <Avatar
                />
            </Stack>
        </Stack>
    </Box>
  )
}
