<template>
  <nav class='navbar navbar-light topbar-nav'>
    <div class='container'>
      <router-link class='navbar-brand' :to="{name: 'home'}">
        <img class='topbar-image' src="../img/Boba.jpg"/>
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}">
            Home
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'budget'}">
              Budget
            </router-link>
          </li>
        </template>
        <template v-if="!isLoggedIn">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'login'}">
              Sign In
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="text nav-link" :to="{name: 'register'}">
              Sign Up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Topbar',
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser,
      isLoggedIn: state => state.auth.isLoggedIn
    })
  }
}
</script>

<style scoped>
  .topbar-nav {
    background-color: #5cb85c;
  }
  .topbar-image {
    height: 100%;
    width: 40px;
    border-radius: 50%;
  }
</style>
