<template>
    <div class="info-box">
        <div class="location">Localizacao</div>
        <div class="date">Data Atual</div>
    </div>
</template>

<script>
export default {
    name: 'LocalInformation'
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
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
</style>