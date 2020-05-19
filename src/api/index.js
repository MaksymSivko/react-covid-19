import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changebleUrl = url;

  if (country) {
    changebleUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changebleUrl);

    const modifiData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiData = data.map((dailyDate) => ({
      confirmed: dailyDate.confirmed.total,
      deaths: dailyDate.deaths.total,
      date: dailyDate.reportDate,
    }));

    return modifiData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
