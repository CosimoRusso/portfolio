import {Button, Divider, Grid} from "@mui/material";

function ProjectBox(props){
    const {image, name, url, text} = props;
    return (
        <div className={'project-box'}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <img src={'/images/' + image} alt={name} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <div>
                        <h2>{name}</h2>
                        <p>{text}</p>
                        <div style={{textAlign: 'center'}}>
                            <Button
                                variant={'contained'}
                                href={url}
                                target={'_blank'}
                                fullWidth={true}
                            >
                                Open the website
                            </Button>
                        </div>

                    </div>

                </Grid>

            </Grid>
            <Divider className={'divider'}/>
        </div>
    )
}

export default ProjectBox