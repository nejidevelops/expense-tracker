// Components imports
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

// Context API import
import { Provider } from './context/GlobalState';

// Styling imports
import './App.css';

function App() {
  return (
    <Provider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
