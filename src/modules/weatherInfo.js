import api from '../api/openweather';

// Defenicao de variaveis locais que tomarao o valos dos dados capturados pela API
const state = {
    weather: {}
}

// Retorno dos dados capturados da API
const getters = {
    weatherInfo: (state) => {
        return state.weather;
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
        commit('setWeather',response);
    }
}

/*
    Trata de atribuicoes de alteracoes surgidas nas funcoes 
    definidas em actions, nos dados definidos em state
*/
const mutations = {
    setWeather: (state,weather) => {
        state.weather = weather;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}