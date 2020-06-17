import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from '../components';
import styles from './App.module.css';
import dF from '../api/index';

class App extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const fetchedData = await dF.fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
