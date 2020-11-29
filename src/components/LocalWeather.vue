<template>
    <div class="weather-box">
        <div class="temperature">{{ Math.round(cityCurrentTemp) + ' ºC'}}</div>
        <div class="weather-info">
          <div class="left-item">
            Min Temp:
            <div>{{ `${cityMinTemp} ºC` }}</div>
          </div>
          <div class="middle1-item">
            Max Temp:
            <div>{{ `${cityMaxTemp} ºC` }}</div>
          </div>
          <div class="middle2-item">
            Wind Speed:
            <div>{{ `${cityWindSpeed} km/h` }}</div>
          </div>
          <div class="right-item">
            Humidity:
            <div>{{ `${cityWindSpeed} %` }}</div>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LocalWeather',
    computed: mapGetters(['cityCurrentTemp','cityMaxTemp','cityMinTemp','cityHumidity','cityWindSpeed'])
}
</script>

<style scoped>
.weather-box {
  text-align: center;
}

.weather-box .temperature {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather-info {
  color: #FFF;
  font-size: 48px;
  font-weight: 700px;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: table;

}

.weather-box .left-item {
  width: 25%;
  display: table-cell;
}

.weather-box  .middle1-item {
  display: table-cell;
}

.weather-box  .middle2-item {
  display: table-cell;
}

.weather-box .right-item {
  display: table-cell;
}
</style>