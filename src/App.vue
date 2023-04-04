<script setup>
import Sidebar from "./components/Sidebar.vue"
import { useAuthStore } from "./store/useAuthStore";
import { onMounted } from "vue";

const store = useAuthStore();

onMounted(()=>{
  store.init()
})



</script>

<template>
  <div class="app">
    <Sidebar v-if="store.isLogin"  class="sidebar" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
:root {
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;

  --primary: #AAD4CC;
  --primaryDark: #8FB2AC;
  --primaryLigth: #A9D4CC;
  --PrimarySubtle: #CFE5E1;

  --secondary: #7AAAAF;
  --secondaryDark: #789496;
  --secondaryLigth: #8FAFB2;
  --secondarySubtle: #B5C8C9;

  --thirterydary: #FFAD65;
  --thirterydaryDark: #CC8A51;
  --thirterydaryLigth: #FFC999;
  --thirterydarySubtle: #FFE4CC;

  --error: #FF8080;
  --success: #3DCC78;
  --warning: #FFB44D;

  --bg3: #F8FAFA;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media(max-width: 768px) {
      padding-left: 6rem;
    }
  }
}</style>