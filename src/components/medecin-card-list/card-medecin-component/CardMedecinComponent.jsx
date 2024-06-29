import { Avatar, Card, Chip, Stack, Tooltip, Typography } from '@mui/joy'
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const CardMedecinComponent = () => {
  return (
    <NavLink to={'/dossiers'} style={{ textDecoration: 'none' }}>
        <Card
            sx={{
                bgcolor: 'Background'
            }}
        >
            <Stack
                spacing={1}
            >
                <Stack
                    alignItems={'center'}
                    spacing={1}
                >
                    <Avatar
                        sx={{
                            '--Avatar-size': '5rem'
                        }}
                    />
                    <Stack>
                        <Typography textAlign={'center'} level='title-sm' fontWeight={'lg'}>Excellence KAWEJ</Typography>
                        <Typography level='body-sm' textAlign={'center'}>Role du medecin</Typography>
                    </Stack>
                </Stack>
                <Stack
                    direction='row'
                    alignItems={'center'}
                    justifyContent={'end'}
                    spacing={1}
                >
                    <Tooltip title='Nombre de patients affectés'>
                        <Chip color='primary'><b>5</b></Chip>
                    </Tooltip>
                    <MdArrowForwardIos />
                </Stack>
            </Stack>
        </Card>
    </NavLink>
  )
}
