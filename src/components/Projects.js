import {Container} from "@mui/material";
import ProjectBox from "./ProjectBox";
import projects from "../projectsDescriptions";


function Projects(){
    let left = true;
    for (let p of projects){
        p.left = left;
        left = !left;
    }
    return (<div className={'projects'}>
        <Container maxWidth={'lg'}>
            <h1>My Projects</h1>
            {projects.map(p =>
                <ProjectBox {...p} />
            )}
        </Container>

    </div>)
}

export default Projects;