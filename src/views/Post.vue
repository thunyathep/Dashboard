<template>
  <main class="comment-page">
    <row>
      <div class="col-12 col-md-6 col-lg-4">
        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget1"
          data-bs-toggle="collapse"
          @click="changeMessage1"
        >
          ทั้งหมด
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget1"
          data-bs-toggle="collapse"
          @click="changeMessage2"
        >
          การเรียน
        </button>
        <p>{{ message }}</p>
        <Bar :data="chartData" />
      </div>
    </row>
  </main>
</template>

<script>
import { Bar } from "vue-chartjs";
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

export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    changeMessage1() {
      this.message = "Button 1 clicked!";
    },
    changeMessage2() {
      this.message = "Button 2 clicked!";
    },
  },
};
</script>
