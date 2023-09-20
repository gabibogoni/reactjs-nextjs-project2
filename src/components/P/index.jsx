import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setState,
  } = theContext;
  return (
    <p onClick={() => setState({ ...contextState, counter: counter + 1 })}>
      {body} {counter}
    </p>
  );
};
