import axios from 'axios';
// import {countries} from './countries';

const getStatsCountry = async () => {
  const data = await axios.get('https://api.covid19api.com/summary');
  return data.data.Countries;
};

// const getStatsCountry = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(countries), 4000)
//   })
// };

export default getStatsCountry;
