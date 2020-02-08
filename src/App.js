import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './modules/header/components/header.component';
import Home from './modules/home/components/home.component';
import Wallets from './modules/wallets/components/wallets.component';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/wallets/:id" component={Wallets}></Route>
          <Route exact path="/wallets/transaction/:id" component={Wallets}></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
