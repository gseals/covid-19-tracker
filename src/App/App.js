import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from '../components';
import styles from './App.module.css';
import fetchData from '../api/index';

class App extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
