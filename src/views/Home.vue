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
      <!-- Grabs first 3 articles  -->
      <div class="column is-4" v-for="article in articles.slice(0,3)">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{article.title}}</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <p>
                Posted: {{article.datePosted}}
              </p>
              <!-- <time datetime="{{ article.datePosted }}"> {{ article.datePosted }}</time> -->
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
          title: 'Column 1',
          datePosted: '11/21/2017'
        },
        {
          id: 2,
          title: 'Column 2',
          datePosted: '11/21/2017'
        },
        {
          id: 3,
          title: 'Column 3',
          datePosted: '11/21/2017'
        },
        {
          id: 4,
          title: 'Column 4',
          datePosted: '11/21/2017'
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
