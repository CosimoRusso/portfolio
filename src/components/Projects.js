import {Container, Grid} from "@mui/material";
import ProjectBox from "./ProjectBox";


function Projects(){
    const projects = [{
        name: 'Foodramble',
        url: 'https://www.foodramble.com/',
        image: 'foodramble.jpg'
    },{
        name: 'Menuale',
        url: 'http://menuale.com/',
        image: 'menuale.jpg'
    }, {
        name: 'MatchUp',
        url: 'https://pladat.tk/',
        image: 'pladat.png'
    }
    ]

    return (<div className={'projects'}>
        <Container maxWidth={'lg'}>
            <h1>My Projects</h1>
            <Grid container spacing={3}>
                {projects.map(p =>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <ProjectBox {...p}/>
                    </Grid>
                )}
            </Grid>
        </Container>

    </div>)
}

export default Projects;