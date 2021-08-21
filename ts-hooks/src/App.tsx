import UseEffectComponent from './UseEffectComponent';
import UseStateComponents from './UseStateComponents';

function App () {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponents />
      <h1>useEffect</h1>
      <UseEffectComponent />
    </div>
  );
}

export default App;
