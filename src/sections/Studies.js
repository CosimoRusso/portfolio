import {Container, Grid} from "@mui/material";

function Studies(){
    return (<div>
        <Container>
            <h1>Studies</h1>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <p>My studies start in an IT technical high school, where I studied several programming languages and the main concepts behind the architectures of computers and networks. As final project, I brought a report about my internship experience in a startup, Menuale.</p>
                    <p>After that, I started my bachelor degree Computer Science and Engineering in Politecnico di Milano. For three years I studied all the foundations needed to be an engineer, mainly math, computer science, statistics, electronics, networks. I graduated in 2019 presenting as thesis a group project of an online Java game.</p>
                    <p>For my master degree I mainly focued on Software Engineering and Machine Learning. In my final thesis, titled <i>Machine learning aided algorithms for predicting first-flush in urban stormwater runoff</i>, I studied an environmental engineering phenomenon using two Machine Learning algorithms: Random Forests and Neural Networks. I graduated on the 21st of December 2021, with final mark 110/110 cum laude.</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div style={{padding: '40px'}}><img alt={'Graduation day'} src={'/images/graduation.jpg'} /></div>

                </Grid>
            </Grid>

        </Container>
    </div>)
}

export default Studies;