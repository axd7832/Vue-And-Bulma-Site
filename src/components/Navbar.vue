<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      ANDREW DIANA
    </a>
    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-burger{
     border: 0;
  }
</style>
