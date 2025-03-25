import React, { useState } from 'react';
import './App.css';
import { InputName } from './components/input-name/input-name';
import { InputBirthday } from './components/input-birthday/input-birthday';
import { Salute } from './components/salute/salute';
import { Age } from './components/age/age';

function App() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');

  return (
    <div className="App">
      <h1 className='header'>Welcome to the app</h1>
      
      {/* ERROR AAA 1: Contraste insuficiente */}
      <p style={{ color: '#cccccc', backgroundColor: '#ffffff' }}>
        Este texto tiene un contraste insuficiente de 2:1, lo que viola el criterio WCAG AAA.
      </p>

      {/* ERROR AAA 2: Texto pequeño sin opción de aumentar */}
      <p style={{ fontSize: '10px' }}>
        Texto demasiado pequeño para personas con baja visión.
      </p>

      {/* ERROR AAA 3: Uso de contenido que depende de contexto cultural */}
      <p>
        ¡Feliz cumpleaños!
      </p>

      {/* ERROR AAA 4: No hay mecanismos para evitar errores de entrada */}
      <input type="number" name="age" aria-label="Ingrese su edad" />

      {/* ERROR AAA 5: Falta de navegación por teclado en elementos interactivos */}
      <button onClick={() => alert("Click!")} style={{ border: 'none', background: 'none' }}>
        Click me
      </button>

      {/* ERROR AAA 6: Documento sin título adecuado */}
      {/* No se está utilizando <title> en el documento */}
      <Salute name={name} />
      <Age birthday={birthday} />
      <InputName setName={setName} />
      <InputBirthday setBirthday={setBirthday} />
    </div>
  );
}

export default App;
