<template>
  <div id="app" :class="setBackground">
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
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    SearchBar,
    LocalInformation,
    LocalWeather
  },
  computed: mapGetters(['setBackground'])
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

#app.clear {
  background-image: url('./assets/clear.jpg');
}

#app.clouds {
  background-image: url('./assets/clouds.jpg');
}

#app.drizzle {
  background-image: url('./assets/drizzle.jpg');
}

#app.else {
  background-image: url('./assets/else.jpg');
}

#app.rain {
  background-image: url('./assets/rain.jpg');
}

#app.snow {
  background-image: url('./assets/snow.jpg');
}

#app.thunderstorm {
  background-image: url('./assets/thunderstorm.jpg');
}
</style>
