import axios from 'axios';

const API_KEY = '5c77a04193269945acbe667acc68dff4';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/';

export default {
    fetchWeather: (city) => {
        return axios.get(`${ROOT_URL}weather?q=${city}
            &units=metric&APPID=${API_KEY}`).catch(error => console.log(error));
    }
}