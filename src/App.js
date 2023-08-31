import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : ' ';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {counter}</h1>

        <button type="button" onClick={handleClick}>
          Clique aqui para inverter a rotação da imagem {reverseClass}
        </button>

        <button type="button" onClick={handleCounter}>
          Clique aqui para incrementar +1 ao contador
        </button>
      </header>
    </div>
  );
}

export default App;
