import axios from 'axios';

const getStatsCountry = async () => {
    const data = await axios.get('https://api.covid19api.com/summary');
    return data.data.Countries;
}

export default getStatsCountry;