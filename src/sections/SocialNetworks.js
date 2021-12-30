import {Button, Container, Grid} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

function SocialNetworks(){
    const socials = [
        {
            icon: GitHubIcon,
            name: 'Github',
            link: 'https://github.com/CosimoRusso'
        },{
            icon: LinkedInIcon,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/cosimo-russo-16873510a/'
        },{
            icon: EmailIcon,
            name: 'e-mail',
            link: 'mailto:cosimo.russo123@gmail.com'
        }
    ]

    return (
        <div className={'social-links'}>
            <Container>
                <Grid container spacing={1}>
                    {socials.map(s =>
                        <Grid item xs={12} md={4}>
                            <Button
                                fullWidth={true}
                                variant={'outlined'}
                                href={s.link}
                                target={'_blank'}
                            >

                                <s.icon className={'social-icon'} />
                                {s.name}
                            </Button>

                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default SocialNetworks;