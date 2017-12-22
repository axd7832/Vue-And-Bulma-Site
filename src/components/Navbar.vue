<template>
  <nav id="navbarToggle" class="navbar nav-down">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://bulma.io">
      ANDREW DIANA
    </a>
    <!-- Navbar Burger- -->
    <div class="navbar-burger burger" data-target="navMenubd-example">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenubd-example" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link  is-active" href="#">
          Docs
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href="/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item " href="#">
            Modifiers
          </a>
          <a class="navbar-item " href="#">
            Columns
          </a>
          <a class="navbar-item " href="#">
            Layout
          </a>
          <a class="navbar-item " href="#">
            Form
          </a>
          <a class="navbar-item " href="#">
            Elements
          </a>
            </div>
          </div>
        </div>
      </div>



    </div>
    <div class="navbar-end">
    </div>
  </div>
</nav>
</template>
<script>
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
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
  .navbar{
    transition: top 0.3s ease-in-out;
    /* position: fixed; */
  }
  .nav-up {
    top: -40px;
    display: none;
    /* position:  */
  }
</style>
