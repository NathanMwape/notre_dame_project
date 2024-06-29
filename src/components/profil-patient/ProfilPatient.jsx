import { Avatar, Box, Card, Divider, Grid, Stack, Typography } from '@mui/joy'
import {  FaPhoneAlt } from 'react-icons/fa'
import { MdPlace } from 'react-icons/md'

export const ProfilPatient = () => {
  return (
    <>
        <Grid container spacing={1}>
            <Grid item xs={12} lg={3}>
                <Card
                    sx={{
                        bgcolor: 'Background'
                    }}
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
                        <Typography level='title-md' fontWeight={'bold'}>Nathan MPETI</Typography>
                    </Stack>
                    <Divider sx={{ bgcolor: 'rgb(0,0,0, 0.6)', mx: 0.5 }} />
                    <Stack
                        spacing={1}
                    >
                        <Stack
                            direction='row'
                            justifyContent={'space-between'}
                        >
                            <Typography level='body-sm'>Genre</Typography>
                            <Typography level='body-sm' fontWeight={'lg'}>Masculin</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            justifyContent={'space-between'}
                        >
                            <Typography level='body-sm'>Age</Typography>
                            <Typography level='body-sm' fontWeight={'lg'}>20</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            justifyContent={'space-between'}
                        >
                            <Typography level='body-sm'>Langage</Typography>
                            <Typography level='body-sm' fontWeight={'lg'}>Français</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Box>
                                <FaPhoneAlt />
                            </Box>
                            <Typography level='body-sm' fontWeight={'lg'}>+243 995 642 184</Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            spacing={1}
                        >
                            <Box>
                                <MdPlace />
                            </Box>
                            <Typography level='body-sm' fontWeight={'lg'}>KAMA NIOLA ADFHAJFA FHAJFH JAFHD</Typography>
                        </Stack>
                    </Stack>
                </Card>
            </Grid>
            <Grid item xs={12} lg={9}>
                <Card
                    sx={{
                        bgcolor: 'Background'
                    }}
                >
                    <Typography level='title-md' fontWeight={'lg'}>Ordonnace Médicale</Typography>
                </Card>
            </Grid>
        </Grid>
    </>
  )
}
