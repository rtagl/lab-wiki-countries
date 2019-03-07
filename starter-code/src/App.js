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


  // getCountryFromCCA3 = (cca3) => {
  //   return this.state.countries.find(country => {
  //     return cca3 === country.cca3;
  //   });
  // }

  render() {
    return (

          <div>
            <NavBar />
            <CountryList countries={this.state.countries} />
            <Switch>
              <Route exact path='/country/:id' component={CountryList} />
            </Switch>
          </div>
    );
  }
}

export default App;
