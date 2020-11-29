import Vuex from 'vuex';
import Vue from 'vue';
import weatherInfo from './modules/weatherInfo';

//Permite que o Vuex comunique com o Vue
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        weatherInfo
    }
});