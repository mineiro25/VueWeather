<template>
  <div id="app" >
    <!--
      SearchBar component
    -->
    <SearchBar></SearchBar>

    <div class="information">
      <!--
        Part with local information
      -->
      <LocalInformation />

      <!--
        Part with weather information
      -->
      <LocalWeather />
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import LocalInformation from './components/LocalInformation';
import LocalWeather from './components/LocalWeather';

export default {
  name: 'App',
  components: {
    SearchBar,
    LocalInformation,
    LocalWeather
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  min-height: 100vh;
  padding: 25px;
}

</style>
