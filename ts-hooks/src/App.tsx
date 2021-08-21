import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseStateComponents from './components/UseStateComponents';

function App () {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponents />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
    </div>
  );
}

export default App;
