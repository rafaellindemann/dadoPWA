import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1; // Gera um número entre 1 e 6
    setNumber(randomNumber);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerador de Número Aleatório</h1>
        <button onClick={generateRandomNumber}>Gerar Número</button>
        {number && <p>Número Gerado: {number}</p>}
      </header>
    </div>
  );
}

export default App;
