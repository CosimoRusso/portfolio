import Presentation from "./Presentation";
import {Grid} from "@mui/material";

function Header(){
    return (
        <header>
            <div className={'vertical-center'}>
                <Grid container justifyContent="center">
                    <Grid item xs={10} sm={10} md={8} lg={6}>
                        <Presentation />
                    </Grid>
                </Grid>
            </div>

        </header>
    )
}

export default Header