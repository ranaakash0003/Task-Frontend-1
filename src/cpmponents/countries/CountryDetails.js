import React, { Component } from "react";
import axios from "axios";
import Loading from '../loading/Loading';

class CountryDetails extends Component {
  state = {
    country: [],
    isloading: false
  };
  async componentDidMount() {
    this.setState({
      isloading: true
    });
    const res = await axios.get(
      `https://countriesnode.herokuapp.com/v1/countries/${this.props.match.params.id}`
    );
    this.setState({ country: res.data, isloading: false });
  }
  render() {
    console.log(this.props);
    return (
      <div className="container" style={countryStyle}>
        {this.state.isloading ? (
          <Loading/>
        ) : (
          <div className="card">
            <li>
              <strong>Currency: </strong> {this.state.country.currency}
            </li>
            <li>
              <strong>Area Code: </strong> {this.state.country.phone}
            </li>
          </div>
        )}
      </div>
    );
  }
}

const countryStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "2rem"
};

export default CountryDetails;
