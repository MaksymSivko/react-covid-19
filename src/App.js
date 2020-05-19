import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import styles from './App.module.css';

export class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedDate = await fetchData();
    this.setState({ data: fetchedDate });
  }
  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards date={data} />
        {/* <CountryPicker />
        <Chart /> */}
      </div>
    );
  }
}
