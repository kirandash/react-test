import './App.css';
import Wallet from './components/Wallet';
import Loot from './components/Loot';

function App() {
  return (
    <div className="App">
      <h2>Loot Check</h2>
      <hr/>
      <Wallet/>
      <hr/>
      <Loot />
    </div>
  );
}

export default App;
