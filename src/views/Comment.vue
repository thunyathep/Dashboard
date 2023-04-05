<template>
    <main class="comment-page">
      <div class="container">
        <div class="row">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <div class="container">
              <div class="row"><h3>Comment System</h3>
                <div class="col-sm-6 my-5 barchart">
                  <h3>Number of new Comments</h3>
                  <Bar
                    id="my-chart-id"
                    :options="chartOptions"
                    :data="chartData"
                  />
                </div>
                <div class="col-sm-6 my-5 test-2">
                  <table class="table table-bordered">
                    <h5 class="card-title">ชื่อผู้ใช้งานล่าสุดล่าสุด</h5>
                    <thead>
                      <tr>
                        <th scope="col">ลำดับที่</th>
                        <th scope="col">ชื่อ</th>
                        <th scope="col">นามสกุล</th>
                        <th scope="col">ข้อความที่โพสต์</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>สุระวีร์</td>
                        <td>ใคร่ครวญ</td>
                        <td>ขี้เกียจทำ SE แล้วครับ</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td colspan="2">ธัญๆ</td>
                        <td>การทำงานที่แสนมีความสุข อยากลาออกแล้ว</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>ออฟ</td>
                        <td>อรรถพร</td>
                        <td>PM ที่เก่งเกิน ไม่ไหวว</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">เทพทีม</td>
                        <td>ไหว้ย่อให้พวงมาลัย</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td colspan="2">พ่อบอล</td>
                        <td>ผู้รู้ ผู้ตื่น ผู้ใจเย็น</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 my-8 pt-3 piechart">
                <h5 class="card-title">สรุปการใช้งานความคิดเห็น</h5>
                <canvas id="myChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  
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
    name: "PieChart",
    props: {
      msg: String,
    },
    mounted() {
      console.log("Component mounted.");
  
      const ctx = document.getElementById("myChart");
  
      const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
  
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
      });
  
      myChart;
    },
  
    components: { Bar },
    setup() {
      const chartData = reactive({
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
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
  .test-2 {
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  