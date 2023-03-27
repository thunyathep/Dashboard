<template>
    <v-tabs v-model="selectedTab" vertical>
      <v-tab v-for="(tab, index) in tabs" :key="index">
        {{ tab.title }}
      </v-tab>
      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <p>{{ tab.content }}</p>
      </v-tab-item>
    </v-tabs>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTab: 0,
        tabs: [
          { title: 'Tab 1', content: 'Content for tab 1' },
          { title: 'Tab 2', content: 'Content for tab 2' },
          { title: 'Tab 3', content: 'Content for tab 3' },
        ],
      };
    },
  };
  </script>
  