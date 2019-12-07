<template>
  <div id="app">
    <mt-header class="top"></mt-header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
import Footer from './components/wn/FooterBar.vue'
export default {
  name: 'app',
  components: {
      'footer-bar': Footer
    },
    computed: {}
}
</script>

<style>
body{
  margin: 0;
  background:#f2f1ed;
}
a{text-decoration: none;color:#999896;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer{
  width: 100%;
  padding: 15px 0 20px 0;
}
</style>
