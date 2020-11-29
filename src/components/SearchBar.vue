<template>
  <div class="search-box">
    <input @change="fetchWeather($event.target.value)" type="text" class="search-bar"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  methods: mapActions(['fetchWeather'])
}
</script>

<style scoped>
  input {
    border-radius: 15px 15px 15px 15px;
    width: 40%;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.25);
    background-color: rgb(255, 255, 255, 0.75);
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
  
  div {
    text-align: center;
    margin: 50px;
  }
</style>