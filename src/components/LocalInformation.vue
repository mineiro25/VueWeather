<template>
    <div class="info-box">
        <div class="date">{{ currentDate() }}</div>
    </div>
</template>

<script>

export default {
    name: 'LocalInformation',
    methods: {
      currentDate() {
        let dateObjet = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayOfWeek = daysOfWeek[dateObjet.getDay()];
        let date = dateObjet.getDate();
        let month = months[dateObjet.getMonth()];
        let year = dateObjet.getFullYear();
        return `${dayOfWeek}, ${date} ${month} ${year}`;
      }
    }
}
</script>

<style scoped>
.info-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.info-box .date {
  color: #FFF;
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
</style>