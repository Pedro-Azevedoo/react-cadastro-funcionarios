import  './styles.css';


const TitleSection = (props) => {

    return(
        <>
            <a className="anchor" id="part2"></a>
            <div  className='divTitle'>
                <h1 className='title'>{props.title}</h1>
            </div>
        </>
    );

}

export default TitleSection;