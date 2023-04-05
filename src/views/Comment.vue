<template>
  <main class="post-page">
    <div class="contrainer>">
      <div class="row">
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <div class="container">
            <h3>Comment System</h3>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <!-- <li class="nav-item" role="presentation">
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
                  All Comment
                </button>
              </li> -->
              <!-- <li class="nav-item" role="presentation">
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
                  Comment In Post
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
                  Comment In Comment
                </button>
              </li> -->
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="row">
                  <div class="col-sm-12 my-3 pt-3 ComCom-1">
                    <div class="card-body">
                      <h5 class="card-title">
                        จำนวนการแสดงความคิดเห็นในโพสต์ของปี 2565
                      </h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 ComCom-2">
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
                  <div class="col-sm-6 my-3 pt-3 ComCom-3">
                    <div class="list-group">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start active"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">
                            ตุ๊กตาหมูแสนน่ารักที่รักเธอคนเดียว
                          </h5>
                          <small>1 days ago</small>
                        </div>

                        <small>ถ้าเธอรักเขา ให้ฉันเป็นที่ปรึกษาได้ไหม</small>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">พระอาทิตย์ของน้องปักเป้า</h5>
                          <small class="text-muted">1 days ago</small>
                        </div>

                        <small class="text-muted"
                          >พระอาทิตย์เขาตั้งใจทำงานขนาดนั้น
                          จะไปแย่งโลกมาหมุนรอบตัวเองทำไมอ่ะเตง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">การทำงานของโคอาร่า</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>
                        <small class="text-muted"
                          >บางทีงานก็ทำต้วเองก็ได้นะ
                          อย่ามาใก้เราทำเยอะขนาดนั้น</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">ครอบครัวของน้องแพนกวิ้น</h5>
                          <small class="text-muted">2 days ago</small>
                        </div>

                        <small class="text-muted"
                          >ครอบครับที่ดีคือครอบครัวที่รักเรามากๆไม่ใช่หรอคะ
                          ถ้าเขาไม่รักเราจะเป็นครอบครัวได้ยังไงกัน</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">ผี้เสื้อใจร้ายของนายรักเดียว</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >เอาแค่มาเอาน้ำหวานจากผม
                          เพื่อที่จะได้มีชีวิตไปหาคนนั้น
                          ผมอยากเลอกชอบเขาแล้วครับ ฮืออ</small
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="row">
                  <div class="col-sm-6 my-3 pt-3 ComPost-1">
                    <div class="card-body">
                      <h5 class="card-title">
                        จำนวนการแสดงความคิดเห็นในโพสต์ของปี 2566
                      </h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 ComPost-2">
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
                  <div class="col-sm-4 pt-3 ComPost-3">
                    <div class="list-group">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start active"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small>3 days ago</small>
                        </div>

                        <small>สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">ขก แล้ว</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-4 pt-3 test-3">
                    <div>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
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
                  <div class="col-sm-6 my-3 pt-3 ComCom-1">
                    <div class="card-body">
                      <h5 class="card-title">
                        จำนวนการแสดงความคิดเห็นในความคิดเห็นของปี 2566
                      </h5>
                      <h5 class="card-title">Bar Chart</h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 ComCom-2">
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
                  <div class="col-sm-4 pt-3 ComCom-3">
                    <div class="list-group">
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start active"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small>3 days ago</small>
                        </div>

                        <small>สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small>
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">ขก แล้ว</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>
                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                    </div>
                  </div>
                  <div class="col-sm-4 pt-3 ComCom-3">
                    <div>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action flex-column align-items-start"
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">หมีขั้วโลกเหนือ</h5>
                          <small class="text-muted">3 days ago</small>
                        </div>

                        <small class="text-muted"
                          >สู้ๆ นะ เดี๋ยววันพรุ่งนี้ก็จะสดใสเอง</small
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div> -->
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
      datasets: [{ data: [40, 20, 12, 30, 30, 30, 30, 30, 30, 30, 30, 18] }],
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
.AllComment-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}

.AllComment-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.ComPost-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}

.ComPost-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.ComCom-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.ComCom-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.ComCom-3 {
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
.test-4 {
  background-color: #f1f1f1;
  border: 1px solid #f5f0f0;
  border-radius: 5px;
  padding: 20px;
}
</style>
