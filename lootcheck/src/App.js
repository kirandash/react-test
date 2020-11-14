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
      <div>Powered by: <a href="https://www.coindesk.com/price" target="_blank" rel="noreferrer">Coindesk</a></div>
    </div>
  );
}

export default App;
