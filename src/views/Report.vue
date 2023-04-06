<template>
  <main class="Report-page">
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
                      <h5 class="card-title">จำนวนของผู้ใช้งานที่ถูกรายงาน</h5>
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
                          <th scope="col">ลำดับที่</th>
                          <th scope="col">ชื่อ</th>
                          <th scope="col">นามสกุล</th>
                          <th scope="col">เหตุผลที่ถูกรายงาน</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>อมยิ้ม</td>
                          <td>อาบยาพิษ</td>
                          <td>ก่อนกวน</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">หุ่ยนต์</td>
                          <td>น่ากลัว</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>ช้างน้อย</td>
                          <td>ที่ไม่น้อย</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">เทพเจ้าหวย</td>
                          <td>คำพูดไม่เหมาะสม</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">ลูกบอล</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
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
                          <th scope="col">ลำดับที่</th>
                          <th scope="col">ชื่อ</th>
                          <th scope="col">นามสกุล</th>
                          <th scope="col">ข้อความที่โพสต์</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>อมยิ้ม</td>
                          <td>อาบยาพิษ</td>
                          <td>อยากจะฆ่าแฟนให้ตาย</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">หุ่ยนต์</td>
                          <td>เบื่อเจ้ากระต่าย โพสต์ไร้สาระ</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>ช้างน้อย</td>
                          <td>ที่ไม่น้อย</td>
                          <td>ไอ้คนแบบนั้น ตายๆไปซะ</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">เทพเจ้าหวย</td>
                          <td>งวดนี้ไม่ได้ งวดหน้าเอาใหม่</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">ลูกบอล</td>
                          <td>ผู้โชคร้ายทำไมต้องเป็นผมทุกที</td>
                        </tr>
                      </tbody>
                    </table>
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
                          <th scope="col">ลำดับที่</th>
                          <th scope="col">ชื่อ</th>
                          <th scope="col">นามสกุล</th>
                          <th scope="col">เหตุผลที่ถูกรายงาน</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>เสือ</td>
                          <td>ผู้กล้าหาญ</td>
                          <td>ใช้คำหยาบคาย</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">สมิงขาว</td>
                          <td>ใช้คำที่ส่อถึงการคุกคาม หรือทำร้ายสภาพจิตใจ</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>เวลา</td>
                          <td>ที่ลาวงลับ</td>
                          <td>แสดงความคิดเห็นทำร้ายจิตใจ</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">น้องแอปเปิ้ล</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">ลูกบอล</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
