<template>
<div class="home content">
  <Navbar />
  <section class="hero is-medium is-primary">
    <div class="hero-body">
      <h1 class="title">
        Home Page
      </h1>
      <h2 class="subtitle">
        Goal: Build a responsive site with <strong>Bulma</strong> and <strong>Vue</strong>!
      </h2>
    </div>
  </section>
  <section class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <h2 class="title is-2"><span class="underline">Bulma</span></h2>
      </div>
      <div class="column">
        <p>
          Bulma is a lightweight CSS framework build with flexbox.
        </p>
        <p>
          With Bulma, designing a front end should be a breeze. (I've been told)
        </p>

      </div>
    </div>
    <div class="columns">
      <div class="column is-one-quarter">
        <h2 class="title is-2"><span class="underline">Vue</span></h2>
      </div>
      <div class="column">
        <p>
          Vue is a reactive, compoenent based JS framework.
        </p>
        <p>
          I've decided that I would take a look at the Vue framework after coming from a majority of work done in Angular JS.
        </p>
        <p>
          I'm curious as to how Bulma and Vue will work together. Let's get cooking!
        </p>
      </div>
    </div>
  </section>
  <section class="section">
    <h3 class="title is-3">
      <span class="underline">
        3 Column Example
      </span>
    </h3>
    <div class="columns">
      <div class="column is-4" v-for="article in articles">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      articles: [{
          id: 1,
          title: 'Column 1'
        },
        {
          id: 2,
          title: 'Column 2'
        },
        {
          id: 3,
          title: 'Column 3'
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: left;
}

.underline {
  text-decoration: underline;
}
</style>
