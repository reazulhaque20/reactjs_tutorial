function Title(props){
    console.log(props);
    const { teamName, appName } = props;
    return(
        <span>{teamName} {appName}</span>
    );
}

export default Title;