import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../Reducer';

import './App.css';
import Inventory from '../Inventory';
import Login from '../Login';

import { ReactComponent as Dice4 } from "bootstrap-icons/icons/dice-4-fill.svg";
import { ReactComponent as Dice2 } from "bootstrap-icons/icons/dice-2-fill.svg";
import { ReactComponent as Dice6 } from "bootstrap-icons/icons/dice-6-fill.svg";
import { ReactComponent as CardList } from "bootstrap-icons/icons/card-list.svg";
import { ReactComponent as LoginIcon } from "bootstrap-icons/icons/box-arrow-in-right.svg";

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Router>
        <header>
          <nav className="navbar navbar-expand-md fixed-top" id="navi">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <Dice4 /> <Dice2 /> <Dice6 /> <Dice6 /> <Dice6 /> WC Hüttenberg
            </Link>
              <Link to="/evening">
                <Dice6 /> Würfelabend
            </Link>
              <Link to="/inventory">
                <CardList /> Inventar
            </Link>
              <Link to="/login">
                <LoginIcon /> Login
            </Link>
            </div>
          </nav>
        </header>

        <main className="flex-shrink-0">
          <div className="container">
            <Switch>
              <Route exact path="/">
                Home
          </Route>
              <Route path="/inventory">
                <Inventory />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </main>

        <footer className="footer mt-auto py-3" id="footer">
          <div className="container">
            <div className="text-muted text-center">
              <b>© WC Hüttenberg 2021</b> - <a href="mailto:jan.stopfer@web.de">jan.stopfer@web.de</a>
            </div>
          </div>
        </footer>
      </Router>
    </Provider>
  );
}

export default App;
