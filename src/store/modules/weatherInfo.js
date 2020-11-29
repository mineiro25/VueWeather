import api from '../../api/openweather';

// Defenicao de variaveis locais que tomarao o valos dos dados capturados pela API
const state = {
    temperature: 0,
    max_temperature: 0,
    min_temperature: 0,
    humidity: 0,
    description: "",
    wind_speed: 0
}

// Retorno dos dados capturados da API
const getters = {
    cityCurrentTemp: (state) => {
        return state.temperature;
    },
    cityMaxTemp: (state) => {
        return state.max_temperature;
    },
    cityMinTemp: (state) => {
        return state.min_temperature;
    },
    cityHumidity: (state) => {
        return state.humidity;
    },
    weatherDescription: (state) => {
        return state.description;
    },
    cityWindSpeed: (state) => {
        return state.wind_speed;
    },
    setBackground: (state) => {
        let weatherType = "";
        switch(state.description) {
          case 'Clear':
            weatherType = 'clear';
            break;
          case 'Clouds':
            weatherType = 'clouds';
            break;
          case 'Drizzle':
            weatherType = 'rain';
            break;
          case 'Snow':
            weatherType = 'snow';
            break;
          case 'Thunderstorm':
            weatherType = 'thunderstorm';
            break;
        }
        return weatherType;
      }
}

const actions = {
    async fetchWeather ({ commit }, city) {
        /*
            Estabelece a ligacao com o ficheiro openweather 
            que por sua vez trata dos pedidos HTTP com a API
        */
        const response = await api.fetchWeather(city);

        //Envia as atribuicoes da resposta da API 
        commit('setData',response);
    }
}

/*
    Trata de atribuicoes de alteracoes surgidas nas funcoes 
    definidas em actions, nos dados definidos em state
*/
const mutations = {
    setData: (state,response) => {
        state.temperature = response.data.main.temp;
        state.max_temperature = response.data.main.temp_max;
        state.min_temperature = response.data.main.temp_min;
        state.wind_speed = response.data.wind.speed;
        state.humidity = response.data.main.humidity;
        state.description = response.data.weather[0].main;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}