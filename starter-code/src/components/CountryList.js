import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';

class CountryList extends Component {

  state = {
    countries
  }

  showCountries = () => {
    console.log(this)
    let list = this.props.countries.map((country, i) => {
      return (
        <div className="col-5 overflow">
          <div className="list-group">
            <li className='list-group-item list-group-item-action'><Link to="/:id"></Link>{country.name.common}</li>
          </div>
        </div>
      )
    })
    return list
  }

  render() {
    return (
      <div>
        {this.showCountries()}
      </div>
    )
  }
} 

export default CountryList