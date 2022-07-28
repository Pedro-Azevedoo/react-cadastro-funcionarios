import ColaboradorCard from '../ColaboradorCard';
import './styles.css';

const Time = (props) => {
    return(
        (props.colaboradores.length > 0 ) && <section className='time' style={{backgroundColor: props.corSec}}>
            <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>
            <div className='time-container'>
                {/* Tratar os times  */}
                {
                    props.colaboradores.map( colaborador => 
                        <ColaboradorCard key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrim = {props.corPrim}/>)
                }   
            </div>
        </section>
    );
}

export default Time;

