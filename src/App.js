import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // o useEffect faz o trabalho de componentDidMount, componentDidUpdate e componentWillUnmount;
  // componentDidUpdate - executa toda vez que o componente atualiza;
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  // componentDidMount - executa 1x;
  // [] é um array de dependências e se passarmos um array vazio vai executar somente 1x;
  // ? é chamado de encademento opcional;
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUnmount
    // para limpar
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // com dependência - executa toda vez que minha dependência mudar;
  // eu só quero que essa função seja executada quando a minha dependência [] mudar, e por dependência estou falando de parte do estado;
  useEffect(() => {
    console.log('C1: ', counter, 'C2: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 2</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+</button>
    </div>
  );
}

export default App;
