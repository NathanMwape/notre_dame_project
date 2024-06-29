import { Card, Chip, Stack, Typography } from '@mui/joy'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaRegFolderOpen } from 'react-icons/fa6'
import { MdArrowForwardIos } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const CardDossierComponent = ({item}) => {
  return (
    <NavLink to='/patient/1' style={{ textDecoration: 'none' }}>
        <Card
            sx={{
                bgcolor:'Background'
            }}
        >
            <Stack>
                <Stack
                    alignItems={'end'}
                >
                    {item % 2 === 0 ? <Chip color='success' size='sm'><b>Reglé</b></Chip>: <Chip color='danger' size='sm'><b>Encour</b></Chip>}
                </Stack>
                <Stack
                    alignItems={'center'}
                >
                    <FaRegFolderOpen color='rgb(0, 86, 221, 0.6)' size={70} />
                    <Typography level='body-sm' textAlign='center'>Consultation du <b>Ven. 12 mars</b></Typography>
                </Stack>
                <Stack
                    alignItems={'end'}
                >
                    <MdArrowForwardIos />
                </Stack>
            </Stack>
        </Card>
    </NavLink>
  )
}
