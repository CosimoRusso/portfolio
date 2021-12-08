import {Button, Grid} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialLinks(){
    return (
        <div className={'social-links'}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Button
                        color={'primary'}
                        fullWidth={true}
                        variant={'outlined'}
                        href={'https://github.com/CosimoRusso'}
                        target={'_blank'}
                    >
                        <GitHubIcon className={'social-icon'} />
                        GitHub
                    </Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        color={'primary'}
                        fullWidth={true}
                        variant={'outlined'}
                        href={'https://www.linkedin.com/in/cosimo-russo-16873510a/'}
                        target={'_blank'}
                    >
                        <LinkedInIcon className={'social-icon'} />
                        LinkedIn
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SocialLinks;