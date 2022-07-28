import  './styles.css';


const TitleSection = (props) => {

    return(
        <div className='divTitle'>
            <h1 className='title'>{props.title}</h1>
        </div>
    );

}

export default TitleSection;