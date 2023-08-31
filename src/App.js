import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : ' ';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleCounter = () => {
    // as funções de set podem receber uma função de callback;
    // agora não utilizamos diretamente o counter utilizamos o parâmetro da função de callback que o setCounter recebe;
    // em alguns casos é mais vatajoso utilizarmos uma função de callback, porque assim garantimos que temos o estado atual correto;
    setCounter((c) => c + 1);
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
