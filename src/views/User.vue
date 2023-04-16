<script>
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
  import { Bar } from "vue-chartjs";
  
  import { reactive } from "vue";
  
  export default {
    components: { Bar },
    setup() {
      const chartData = reactive({
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{ data: [10, 15, 12, 18, 20, 25, 32, 28, 20, 30, 42, 50] }],
      });
  
      const chartOptions = reactive({
        responsive: true,
      });
  
      return {
        chartData,
        chartOptions,
      };
    },
  };
</script>

<template>
    <main class="dailyquest-page">
        <h1>User</h1>
        <p>This is the User page</p>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
  