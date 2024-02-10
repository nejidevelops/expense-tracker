// Components imports
import Header from './components/Header';
import Balance from './components/Balance';

// Styling imports
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
