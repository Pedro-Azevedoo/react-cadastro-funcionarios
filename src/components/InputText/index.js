import './styles.css';


const InputText = (props) => {
  const aoDigitado = (event) => {
      props.aoAlterado(event.target.value);
  }

  return(
        <div className="camp">
          <label>{props.label}</label>
          <input value= {props.value} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} maxLength={props.max_length}/>
        </div>
    );
}

export default InputText;