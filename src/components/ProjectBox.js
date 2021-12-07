function ProjectBox(props){
    const {image, name, url} = props;
    return (
        <div className={'project-box'}>

            <a href={url} target={'_blank'} rel={'noreferrer'}>
                <div className={'container'}>
                    <img src={'/images/' + image} alt={name} />
                    <p className={'centered'}>{name}</p>
                </div>
            </a>
        </div>
    )
};

export default ProjectBox