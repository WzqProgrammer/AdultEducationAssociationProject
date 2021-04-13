<template>
  
  <div class="home">
    <top></top>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import top from "@/components/01.top.vue";

export default {
  name: "Home",
  components: {
    top,
    HelloWorld,
  },
};
</script>
