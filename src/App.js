import React, { useState } from 'react';
import './App.css';
import { InputName } from './components/input-name/input-name';
import { InputBirthday } from './components/input-birthday/input-birthday';
import { Salute } from './components/salute/salute';
import { Age } from './components/age/age'; // Asegúrate de que la ruta sea correcta

function App() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');

  return (
    <div className="App">
      <h1 className='header'>Welcome to the app</h1>
      <Salute name={name} />
      <Age birthday={birthday} />
      <InputName setName={setName} />
      <InputBirthday setBirthday={setBirthday} />
    </div>
  );
}

export default App;
