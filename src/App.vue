<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
  name: 'app',
}
</script>

<style>
#app {
    min-width: 1080px;
    height: 100%;
    margin: 0px;
}
</style>
