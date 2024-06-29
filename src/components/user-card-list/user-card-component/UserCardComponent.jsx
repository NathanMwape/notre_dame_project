import { Avatar, Card, Stack, Typography } from '@mui/joy'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const UserCardComponent = ({nom, prenom, role}) => {
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
                        <Typography textAlign={'center'} level='title-sm' fontWeight={'lg'}>{`${nom} ${prenom}`}</Typography>
                        <Typography level='body-sm' textAlign={'center'}>Role: <b>{role.toLocaleUpperCase()}</b></Typography>
                    </Stack>
                </Stack>
                {/* <Stack
                    direction='row'
                    alignItems={'center'}
                    justifyContent={'end'}
                    spacing={1}
                >
                    <Tooltip title='Nombre de patients affectés'>
                        <Chip color='primary'><b>5</b></Chip>
                    </Tooltip>
                    <MdArrowForwardIos />
                </Stack> */}
            </Stack>
        </Card>
    </NavLink>
  )
}
