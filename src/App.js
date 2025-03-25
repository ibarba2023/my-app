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
      
      {/* ERROR 1.4.6 AAA: Contraste insuficiente (debería ser al menos 7:1) */}
<p style={{ color: '#aaaaaa', backgroundColor: '#ffffff' }}>
  Este texto tiene un contraste insuficiente (debe ser 7:1 mínimo).
</p>
      <Salute name={name} />
      <Age birthday={birthday} />
      <InputName setName={setName} />
      <InputBirthday setBirthday={setBirthday} />
    </div>
  );
}

export default App;
