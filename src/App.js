import "./App.css";
import { GlobalProvider } from "./contextx/context";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;