<template>
  <div class="app">
    <header>
      <NavBar/>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --main_red: rgb(206, 0, 10);
  --hover_red: rgb(187, 58, 58);
}

header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 4px gray;
}

main {
  padding: 20px;
}
</style>
