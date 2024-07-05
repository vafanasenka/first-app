import logo from './logo.svg';
import './App.css';
import Fcomponent from './Components/FunctionalComponents/Fcomponent';
import Ccomponent from './Components/ClassComponents/Ccomponent';
import Menu from './Components/ArrowFunctionComponents/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name="Bob" />
        <Ccomponent numbers={[1112, 2223]} />
        <Menu />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
