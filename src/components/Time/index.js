import ColaboradorCard from '../ColaboradorCard';
import './styles.css';

const Time = (props) => {
    return(
        <section className='time' style={{backgroundColor: props.corSec}}>
            <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>

            {props.colaboradores.map( colaborador =>  <ColaboradorCard nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}   
        </section>
    );
}

export default Time;

