import './styles.css'

const DropDown = (props) => {
    var array = props.array;
    array = array.sort();

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    }

    return(
        <div className='camp'>
            <label>{props.label}</label>
            <select value={props.value} onChange={aoDigitado} required={props.obrigatorio}>
                {/* <option value="" selected> </option>  */}
                <option value="" selected>Selecione um Setor</option> 

                {
                     array.map(element => <option key={element} value={element}>{element}</option>)
                }

            </select>
        </div>

    );

}

export default DropDown;