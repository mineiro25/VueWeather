<template>
  <div class="search-box">
    <input @input="onInput" type="text" class="search-bar"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      this.$emit('termChange',event.target.value);
    }
  }
}
</script>

<style scoped>
  input {
    border-radius: 15px 15px 15px 15px;
    width: 70%;
    box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.25);
    background-color: rgb(255, 255, 255, 0.75);
  }
  
  div {
    text-align: center;
    margin: 50px;
  }
</style>