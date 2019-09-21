import React, {Component} from 'react';
import CountryItem from './CountryItem';
import axios from "axios";
import Loading from '../loading/Loading'
import {default as UUID} from "node-uuid";

class Country extends Component {
    state = {
      countries: [],
      isloading: false
    };
    async componentDidMount() {
        this.setState({
            isloading: true
          });
      const res = await axios.get(
        "https://countriesnode.herokuapp.com/v1/countries"
      );
      console.log(res.data);
      this.setState({ countries: res.data, isloading: false  });
    }
    render() {
        return (
            <div style= {countryStyle}>
                {this.state.isloading ?(<Loading/>):(this.state.countries.map(country => (
                    <CountryItem key={UUID(country)} country={country}/>
                )))}
                
            </div>
        )
}
}

const countryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2rem'
};

export default Country;