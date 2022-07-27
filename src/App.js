import { useState } from 'react';
import Banner from './components/Banner/index';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const times = [
    {
      nome: 'Administrativo',
      corPrimaria: 'rgb(87, 194, 120)',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Assessoria',
      corPrimaria: 'rgb(130, 207, 250)',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'CRM',
      corPrimaria: 'rgb(166, 209, 87)',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Comercial',
      corPrimaria: 'rgb(224, 107, 105)',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Comercial ERP',
      corPrimaria: 'rgb(219, 110, 191)',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Comercial Fisco',
      corPrimaria: 'rgb(255, 186, 5)',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Desenvolvimento',
      corPrimaria: 'rgb(255, 138, 41)',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Diretoria',
      corPrimaria: 'rgb(87, 194, 120)',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Marketing',
      corPrimaria: 'rgb(130, 207, 250)',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Qualidade',
      corPrimaria: 'rgb(166, 209, 87)',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'RH',
      corPrimaria: 'rgb(224, 107, 105)',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Suporte',
      corPrimaria: 'rgb(219, 110, 191)',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Tecnologia',
      corPrimaria: 'rgb(255, 186, 5)',
      corSecundaria: '#FFF5D9'
    }
  
  ];

  const [colaborTime, setColaborTime] = useState([]);

  // colaborTime = colaboradores.map(colaborador => {
  //     if(colaborador.dropDownSetor == )
  // })

  function adicionarColaborador(props){
    console.log(colaboradores);
      setColaboradores([...colaboradores, props]);
  }



  return (

    <div className="App">
        <Banner />
        <Formulario times={times.map(time => time.nome)} cadastroColaborador={colaborador => adicionarColaborador(colaborador)}/>
        {times.map(time => <Time key={time.nome} nome={time.nome} corPrim={time.corPrimaria} corSec={time.corSecundaria} colaboradores={colaboradores}/>)}
    </div>
  );
}

export default App;
