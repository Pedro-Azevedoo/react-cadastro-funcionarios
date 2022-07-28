import { useState } from 'react';
import './styles.css';

const ColaboradorCard = (props) =>{

    const [urlImage, setUrlImage] = useState(props.imagem);
    const [errorImg, setErrorImg] = useState(false);

    
    function alerta(){
        setUrlImage('https://intranet.supersoft.com.br/usuarios/fotos/anonimo.png');
        
    }

    return(
        <div className='rectangle'>
            <div className='colorSector' style={{backgroundColor: props.corPrim  }}>
                <div className='img' style={{borderColor: props.corPrim}}>
                    <img id="img" src={urlImage} alt={props.nome} onError={alerta} />
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

