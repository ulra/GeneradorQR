import {Provider} from './context/Context'
import './App.css';
import Home from './Page/Home';

function App() {
  return (
    <Provider>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  );
}

export default App;
