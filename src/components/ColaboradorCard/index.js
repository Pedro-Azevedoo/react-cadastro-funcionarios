import './styles.css';

const ColaboradorCard = (props) =>{
    return(
        <div className='rectangle'>
            <div className='colorSector' style={{backgroundColor: props.corPrim  }}>
                <div className='img' style={{borderColor: props.corPrim}}>
                    <img src={props.imagem} alt={props.nome}  />
                </div>
            </div>
            
            <div className='content'>
                <h4 style={{color: props.corPrim}}>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
            
    );
}

export default ColaboradorCard;

