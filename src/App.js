import { useState } from 'react';
import Banner from './components/Banner/index';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import ModalInicio from './components/ModalInicio';
import Time from './components/Time';
import TitleSection from './TitleSection';

function App() {
  const [colaboradores, setColaboradores] = useState([
    // ADMINISTRATIVO
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Administrativo'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Administrativo'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Administrativo'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Administrativo'
    },
    
    // ASSESSORIA
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Assessoria'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Assessoria'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Assessoria'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Assessoria'
    },

//CRM
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'CRM'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'CRM'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'CRM'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'CRM'
    },
    
// COMERCIAL
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Comercial'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Comercial'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Comercial'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Comercial'
    },

    //COMERCIAL ERP
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Comercial ERP'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Comercial ERP'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Comercial ERP'
    },
    
// COMERCIAL FISCO
    {
      'nome': 'Veronica Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/1.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },
    {
      'nome': 'Riley Harris',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/2.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },
    {
      'nome': 'Billie Johnston',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/3.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },
    {
      'nome': 'Bradley Green',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/1.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },    {
      'nome': 'Lance Roberts',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/2.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },    {
      'nome': 'Robert Kelly',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/3.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },    {
      'nome': 'Victor Gonzales',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/men/4.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },    {
      'nome': 'Bianca Araujo',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/4.jpg',
      'dropdownSetor': 'Comercial Fisco'
    }    ,    {
      'nome': 'Ariana Grande',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/5.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },    {
      'nome': 'Ynara Silva',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/6.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },
    {
      'nome': 'Vitória Pereira',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/7.jpg',
      'dropdownSetor': 'Comercial Fisco'
    },    {
      'nome': 'Ferananda Fagundes',
      'cargo': 'Gestora',
      'imagem': 'https://randomuser.me/api/portraits/women/8.jpg',
      'dropdownSetor': 'Comercial Fisco'
    }
  ]);
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
