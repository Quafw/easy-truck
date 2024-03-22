<template>
  <div class="content">
    <!-- <h1>About</h1> -->
    
    
    <q-btn @click="routing"> Home </q-btn>
  </div>
</template>

<script>
import router from "@/router";

export default {
  setup() {
    function routing() {
      router.push("/");
    }
    return {
      routing,
    };
  },
};
</script>
