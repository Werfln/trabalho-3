<template>
  <div>
    <NavBar />
  </div>
  <div class="container mt-5">
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
