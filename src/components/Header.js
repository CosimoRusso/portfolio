import Presentation from "./Presentation";
import {Button, Grid} from "@mui/material";
import SocialLinks from "./SocialLinks";

function Header(){
    return (
        <header>
            <div className={'vertical-center'}>
                <Grid container justifyContent="center">
                    <Grid item xs={10} sm={10} md={8} lg={6}>
                        <Presentation />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={10} sm={6}>
                        <Button className={'btn-cv'}
                                fullWidth={true}
                            // color={"primary"}
                                variant={'contained'}
                                href={'/CosimoRussoCV.pdf'}
                                target={'_blank'}
                        >
                            Download my CV
                        </Button>
                    </Grid>
                </Grid>

                <Grid container justifyContent={'center'}>
                    <Grid item xs={10} sm={6}>
                        <SocialLinks />
                    </Grid>
                </Grid>
            </div>
        </header>
    )
}

export default Header