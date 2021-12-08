import Presentation from "./Presentation";
import {Button, Grid} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
                <div className={'scroll-down'}>
                    <p style={{margin: 0}}>Scroll for more</p>
                    <KeyboardArrowDownIcon  color={'primary'} />
                </div>
            </div>

        </header>
    )
}

export default Header