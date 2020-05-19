import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import coronaImage from './imges/image.png';
import styles from './App.module.css';

export class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedDate = await fetchData();
    this.setState({ data: fetchedDate });
  }

  hendleCountryChange = async (country) => {
    const fetchedDate = await fetchData(country);
    this.setState({ data: fetchedDate, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="coronaImage" />
        <Cards date={data} />
        <CountryPicker hendleCountryChange={this.hendleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
