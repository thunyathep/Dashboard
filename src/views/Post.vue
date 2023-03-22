<template>
  <main class="post-page">
    <h1>Post</h1>
    <p>This is the post page</p>
    <div class="contrainer>">
      <div class="row">
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <button button type="button" class="btn btn-outline-primary">
            ผลรวมของการโพสหต์ทั้งหมด
          </button>
          &nbsp;&nbsp;&nbsp;
          <button button type="button" class="btn btn-outline-primary">
            ปัญหาด้านความการเรียน
          </button>
          &nbsp;&nbsp;&nbsp;
          <button button type="button" class="btn btn-outline-primary">
            ปัญหาด้านครอบครัว
          </button>
          &nbsp;&nbsp;&nbsp;
          <button button type="button" class="btn btn-outline-primary">
            ปัญหาด้านความรัก
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="contrainer"> -->
      <div class="row">
        <div class="col-sm-5 my-3 pt-3 test-1">
          <div class="card-body">
            <h5 class="card-title">Bar Chart</h5>
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
          </div>
        </div>
        <div class="col-sm-5 my-3 pt-3 test-2">
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
        <div class="col-sm-3 my-3 pt-3 test-3">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                <small>3 days ago</small>
              </div>
              <!-- <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> -->
              <small>สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <!-- <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> -->
              <small class="text-muted">สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small>
            </a>
          </div>
        </div>
        <div class="col-sm-3 my-3 pt-3 test-3">
          <div>
            <pie-chart>Pie Chart</pie-chart>
            <pie-chart>Pie Chart</pie-chart>
            
          </div>
        </div>
        <div class="col-sm-3 my-3 pt-3 test-3">
          <div>
            <pie-chart>Pie Chart</pie-chart>
            <pie-chart>Pie Chart</pie-chart>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    <!-- </div> -->
  </main>
</template>

<script type="text/javascript">
//import * as _ from "../Post/AllPost.vue";

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
        labels: ["January", "February", "March"],
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
  border-radius: 5px;
  padding: 20px;
}
</style>
