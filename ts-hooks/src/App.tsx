import CustomHookComp from './components/CustomHookComp';
import UseContextComponent from './components/UseContextComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseRefComp from './components/UseRefComp';
import UseStateComponents from './components/UseStateComponents';

function App () {
  return (
    <div>
      <h1>CustomHook</h1>
      <CustomHookComp />
      <h1>useState</h1>
      <UseStateComponents />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComp />
    </div>
  );
}

export default App;
