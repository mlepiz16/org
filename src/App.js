import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header />
      { mostrarFormulario ? <Formulario /> : <></> }  
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
