import DropDown from "../DropDown";
import InputText from "../InputText";
import ButtonSubmit from "../ButtonSubmit";
import './styles.css';
import { useState } from "react";


    const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [dropdownSetor, setDropdownSetor] = useState('Administrativo');

    function save(event){
        console.log(event);
        event.preventDefault();

        props.cadastroColaborador({
            nome, 
            cargo, 
            imagem,
            dropdownSetor
        })
    }                  

    return (
        <section>
            <form onSubmit={save}>
                <h3>Preencha os dados do Colaborador</h3>
                <InputText value={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o nome" />
                <InputText value={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o cargo" />
                <InputText value={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" placeholder="Digite o caminho da Imagem" />
                <DropDown value={dropdownSetor} aoAlterado={valor => setDropdownSetor(valor)} obrigatorio={true}  label="Setor" array={props.times} />
                <ButtonSubmit>ENVIAR</ButtonSubmit>
            </form>
        </section>
    )

}

export default Formulario;