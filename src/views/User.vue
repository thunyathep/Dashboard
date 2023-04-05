<template>
  <main class="dailyquest-page">
      <div class="container">
          <div class="row">
              <div class="shadow-sm p-3 mb-5 bg-white rounded">
                  <div class="row">
                      <div class="col-sm-4 my-3 piechart">
                          <canvas id="myChart"></canvas>
                      </div>
                      <div class="col-sm-11 my-3 barchart">
                          <h3>Number of new users</h3>
                          <Bar id="my-chart-id" :options="chartOptions" :data="chartData"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import Chart from 'chart.js/auto'

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
  name: 'PieChart',
  props: {
      msg: String
  },
  mounted(){
      console.log('Component mounted.')

      const ctx = document.getElementById('myChart');

      const data = {
labels: [
  'Red',
  'Blue',
  'Yellow'
],
datasets: [{
  label: 'My First Dataset',
  data: [300, 50, 100],
  backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
  ],
  hoverOffset: 4
}]
};

  const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
  });

  myChart;
  },

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
}
</script>

<style lang="scss" scoped>
.piechart {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
.barchart {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
</style>