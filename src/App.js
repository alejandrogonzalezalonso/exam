import { useState } from 'react';
import './App.css';
import './componentes/Formulario';
import './componentes/Listado';
import './componentes/Item';

function App() {
  const[formulario,setFormulario] = useState(null);
  return (
    <Contenedor className = "contenedor">
      <Row as ="header">
        <Col as = "h1">Gestión de mis 6 amigos</Col>
      </Row>
      <Row as ="main">
        <Formulario />
        <Listado />
      </Row>
    </Contenedor>
  );
}

export default App;
