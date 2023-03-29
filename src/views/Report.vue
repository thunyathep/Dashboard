<template>
  <main class="post-page">
    <div class="contrainer>">
      <div class="row">
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <div class="container">
            <h3>Report System</h3>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Report In User
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Report In Post
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Report In Comment
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="row">
                  <div class="col-sm-6 my-3 pt-3 test-1">
                    <div class="card-body">
                      <h5 class="card-title">จำนวนของผู้ใช้งานที่โดนรายงาน</h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 test-2">
                    <table class="table table-bordered">
                      <h5 class="card-title">การโพสต์ข้อความล่าสุด</h5>
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
                <div class="row">
                  <div class="col-sm-4 pt-3 test-3">
                    <div>
                      <pie-chart>Pie Chart</pie-chart>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="row">
                  <div class="col-sm-6 my-3 pt-3 test-1">
                    <div class="card-body">
                      <h5 class="card-title">Bar Chart</h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 test-2">
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
                  <div class="col-sm-4 pt-3 test-3">
                    <div>
                      <pie-chart>Pie Chart</pie-chart>
                      <pie-chart>Pie Chart</pie-chart>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div class="row">
                  <div class="col-sm-6 my-3 pt-3 test-1">
                    <div class="card-body">
                      <h5 class="card-title">Bar Chart</h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 test-2">
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
                  <div class="col-sm-4 pt-3 test-3">
                    <div>
                      <pie-chart>Pie Chart</pie-chart>
                      <pie-chart>Pie Chart</pie-chart>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  </main>
</template>

<script type="text/javascript">
// import { PieChart } from "vue-chartjs";

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

//import Bar from "@/components/Bar.vue";
import { reactive } from "vue";

export default {
  components: { Bar },
  setup() {
    const chartData = reactive({
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
      datasets: [{ data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"] }],
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
