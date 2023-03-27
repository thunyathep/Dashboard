<template>
  <main class="post-page">
    <div class="contrainer>">
      <div class="row">
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <button button type="button" class="btn btn-outline-primary">
            Report In User
          </button>
          &nbsp;&nbsp;&nbsp;
          <button button type="button" class="btn btn-outline-primary">
            Report In Post
          </button>
          &nbsp;&nbsp;&nbsp;
          <button button type="button" class="btn btn-outline-primary">
            Report In Comment
          </button>
          <div class="row">
            <div class="col-sm-12 my-3 pt-3 test-1">
              <div class="card-body">
                <h5 class="card-title">Bar Chart</h5>
                <Bar
                  id="my-chart-id"
                  :options="chartOptions"
                  :data="chartData"
                />
              </div>
            </div>
            <div class="col-sm-4 pt-12 test-3">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="container">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<script type="text/javascript">
// import { PieChart } from "vue-chartjs";

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
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>

<style>
.test-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.test-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.test-3 {
  background-color: #f1f1f1;
  border: 1px solid #fffcfc;
  /* border-radius: 5px;
  padding: 20px; */
}

.test-4 {
  background-color: #f1f1f1;
  border: 1px solid #fffcfc;
  /* border-radius: 5px;
  padding: 20px; */
}
</style>
