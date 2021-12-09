import {Container} from "@mui/material";
import ProjectBox from "./ProjectBox";
import projects from "../projectsDescriptions";


function Projects(){
    return (<div className={'projects'}>
        <Container maxWidth={'lg'}>
            <h1>My Projects</h1>
            <p>I started working in my first startup when I was 17. Now I am {new Date().getFullYear() - 1997},
                and I have worked in many projects. Most of them were for companies, some were a success, others failed,
                some are not publicly available. In this section you can find a small selection of them.</p>
            {projects.map(p =>
                <ProjectBox {...p} />
            )}
        </Container>
    </div>)
}

export default Projects;