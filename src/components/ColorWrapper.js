
function ColorWrapper(props){
    const {children, colorScheme, ...rest} = props;
    console.log(children);
    return <div className={`${colorScheme} color-wrapper`} children={children} {...rest}>
    </div>
}

export default ColorWrapper;