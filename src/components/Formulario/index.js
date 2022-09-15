import DropDown from "../DropDown";
import InputText from "../InputText";
import ButtonSubmit from "../ButtonSubmit";
import './styles.css';
import { useState } from "react";
import Arrow from "../Arrow";


const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [dropdownSetor, setDropdownSetor] = useState('');

    function save(event){
        event.preventDefault();

        props.cadastroColaborador({
            nome, 
            cargo, 
            imagem,
            dropdownSetor
        })
        
        alert("Cadastro realizado com sucesso!");
        
        setNome('');
        setCargo('');
        setImagem('');
        setDropdownSetor('');
    }                  

    return (
        <section className="form">
            <form onSubmit={save}>
                <h3>Preencha os dados do Colaborador</h3>
                <InputText value={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o nome" max_length={50}/>
                <InputText value={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o cargo" max_length={30}/>
                <InputText value={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" placeholder="Caminho (ex.https://github.com/Pedro-Azevedoo.png)" max_length={500}/>
                <DropDown value={dropdownSetor} aoAlterado={valor => setDropdownSetor(valor)} obrigatorio={true}  label="Setor" array={props.times} />
                <ButtonSubmit>ENVIAR</ButtonSubmit>
            </form>

            <Arrow />
        </section>
    )

}

export default Formulario;