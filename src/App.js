import { useState } from 'react';
import Banner from './components/Banner/index';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import ModalInicio from './components/ModalInicio';
import Time from './components/Time';
import TitleSection from './components/TitleSection';

function App() {
  const [colaboradores, setColaboradores] = useState([
    // ADMINISTRATIVO
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Administrativo'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Administrativo'
    },
    
    // ASSESSORIA
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Assessoria'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Assessoria'
    },

//CRM
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'CRM'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'CRM'
    },
    
// COMERCIAL
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Comercial'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Comercial'
    },

    //COMERCIAL ERP
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Comercial ERP'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestor(a)',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Comercial ERP'
    }
  ]);
  const times = [
    {
      nome: 'Administrativo',
      corPrimaria: 'rgb(24 25 51)',
      corSecundaria: 'rgb(24 25 51 / 30%)'
    },
    {
      nome: 'Assessoria',
      corPrimaria: 'rgb(54 55 80)',
      corSecundaria: 'rgb(54 55 80 / 30%)'
    },
    {
      nome: 'CRM',
      corPrimaria: ' rgb(79 79 90)',
      corSecundaria: 'rgb(79 79 90 / 30%)'
    },
    {
      nome: 'Comercial',
      corPrimaria: 'rgb(112 112 112)',
      corSecundaria: 'rgb(112 112 112 / 30%)'
    },
    {
      nome: 'Comercial ERP',
      corPrimaria: 'rgb(173 173 173)',
      corSecundaria: 'rgb(173 173 173 / 30%)'
    },
    {
      nome: 'Comercial Fisco',
      corPrimaria: 'rgb(24 25 51)',
      corSecundaria: 'rgb(24 25 51 / 30%)'
    },
    {
      nome: 'Desenvolvimento',
      corPrimaria: 'rgb(54 55 80)',
      corSecundaria: 'rgb(54 55 80 / 30%)'
    },
    {
      nome: 'Diretoria',
      corPrimaria: ' rgb(79 79 90)',
      corSecundaria: 'rgb(79 79 90 / 30%)'
    },
    {
      nome: 'Marketing',
      corPrimaria: 'rgb(112 112 112)',
      corSecundaria: 'rgb(112 112 112 / 30%)'
    },
    {
      nome: 'Qualidade',
      corPrimaria: 'rgb(173 173 173)',
      corSecundaria: 'rgb(173 173 173 / 30%)'
    },
    {
      nome: 'RH',
      corPrimaria: 'rgb(24 25 51)',
      corSecundaria: 'rgb(24 25 51 / 30%)'
    },
    {
      nome: 'Suporte',
      corPrimaria: 'rgb(54 55 80)',
      corSecundaria: 'rgb(54 55 80 / 30%)'
    },
    {
      nome: 'Tecnologia',
      corPrimaria: 'rgb(112 112 112)',
      corSecundaria: 'rgb(112 112 112 / 30%)'
    }
  
  ];

  // colaborTime = colaboradores.map(colaborador => {
  //     if(colaborador.dropDownSetor == )
  // })

  function adicionarColaborador(props){
    console.log("colaboradores");
    console.log(colaboradores);
      setColaboradores([...colaboradores, props]);
  }



  return (

    <div className="App">
        <ModalInicio />
        <Banner />
        <Formulario times={times.map(time => time.nome)} cadastroColaborador={colaborador => adicionarColaborador(colaborador)}/>
        <TitleSection title="COLABORADORES" />
        {times.map(time => <Time key={time.nome} nome={time.nome} corPrim={time.corPrimaria} corSec={time.corSecundaria}
         colaboradores={colaboradores.filter(colaborador => colaborador.dropdownSetor === time.nome)}/>)}
        
        <Footer />

    </div>
  );
}

export default App;
