import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { NavLink, Route, Switch } from 'react-router-dom';
import CountryList from './components/CountryList';
import NavBar from './components/NavBar';
import countries from './countries.json';
import Home from './components/Home';

class App extends Component {

   state = {
      countries
    }

  render() {
    return (

          <div>
            <NavBar />
            <CountryList countries={this.state.countries} />
            <Switch>
              <Route exact path='/country/:id' component={CountryList} />
            </Switch>
        <Switch>
          <Route exact path='/country/:id' component={CountryList} />
        </Switch>            <Switch>
          <Route exact path='/country/:id' component={CountryList} />
        </Switch>
          </div>
    );
  }
}

export default App;
