import { useState } from 'react';
import './styles.css';

const ModalInicio = () => {

    const [close, setClose] = useState('flex');
    return(
        <>
            <div id="teste" className='background' style={{display: close}}>
                <div className='modal'>
                    <h1>SEJA BEM-VINDO!</h1>
                    <p>Olá, seja Bem-Vindo(a) a meu projeto!<br/><br/> Ele, em sua totalidade, é feito com componentes autorais, 
                        sem bibliotecas de terceiros. Seu objetivo é listar os colaboradores de determinada empresa e permitir ao administrador 
                        adicionar novos colaboradores à lista. As imagens precisam ser link's (CDN) de imagens da web. E, fora os colaboradores "padrão adicionados", é possível adicionar novos colaboradores e eles aparecerão de acordo com o setor. </p>
                        <p>Espero que goste!</p>
                <button className='btn' onClick={ () => setClose('none') }>Ver Projeto!</button>
                </div>

            </div>
        </>
    );
}

export default ModalInicio;