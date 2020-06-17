import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from '../components';
import styles from './App.module.css';
import dF from '../api/index';

import coronaImage from '../images/covidIMG.png';

class App extends Component {
  state = {
    data: [],
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await dF.fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await dF.fetchData(country);
    // set the state
    this.setState({ data: fetchedData, country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="CoVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
