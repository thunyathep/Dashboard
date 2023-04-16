<template>
  <main class="post-page">
    <div class="contrainer>">
      <div class="row">
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <div class="container">
            <h3>Post System</h3>
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
                  All Post
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
                  Post about Life
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
                  Post About Study
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
                  <div class="col-sm-6 my-3 pt-3 AllPost-1">
                    <div class="card-body">
                      <h5 class="card-title">จำนวนการโพสต์ของปี 2565</h5>
                      <Bar
                        id="my-chart-id"
                        :options="chartOptions"
                        :data="chartData"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 my-3 pt-3 mr-2 AllPost-2">
                    <h5 class="card-title">การโพสต์ข้อความล่าสุด</h5>
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
                          <td>กระต่ายน้อย</td>
                        <td>สุขใจในโลกอับเฉา</td>
                        <td>คุณสามารถมีความสุขได้ด้วยตีวคุณเองนะ</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>ออฟ</td>
                          <td>อรรถพร</td>
                          <td>ความรักที่ดีเขาไม่ทำร้ายกันขนาดนี้ใช่ไหมครับ</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">เทพทีม</td>
                          <td>คุณต้องทำก่อนถึงจะรู้ว่าต้องสำเร็จหรอ ทำไมมันไม่มาเองอ่ะ</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">พ่อบอล</td>
                          <td>ชีวิตมันน่าตลกนะครับ ผู้โชคร้ายทำไมต้องเป็นผมทุกที</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">ธัญๆ</td>
                          <td>การทำงานที่แสนมีความสุข อยากลาออกแล้ว</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-sm-4 pt-3 AllPost-3">
                    <h5 class="card-title">การโพสต์ข้อความล่าสุด</h5>
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
                  <div class="col-sm-4 pt-3 AllPost-4">
                    <h5 class="card-title">โพสต์ที่มีการกดถูกใจมากที่สุด</h5>
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
                  <div class="col-sm-6 my-3 pt-3 PostLife-2">
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
                  <div class="col-sm-4 pt-3 test-3">
                    <div>
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
                  <div class="col-sm-6 my-3 pt-3 PostStudy-2">
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
                          <td>กระต่ายน้อย</td>
                        <td>สุขใจในโลกอับเฉา</td>
                        <td>คุณสามารถมีความสุขได้ด้วยตีวคุณเองนะ</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>พระอาทิตย์</td>
                        <td>ที่รักพระจันทร์</td>
                        <td>ความรักนั้นคาดเดาได้ยากจริงๆครับ รักตัวเองมากๆ</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">คุณความสุข</td>
                        <td>ลาออกเลยครับ ออกมาเจอโลกที่กว้างใหญ่อีกครั้ง</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">อนาคตของคุณหญ้า</td>
                        <td>ศุ้ๆนะครับ อาจจะยากหน่อย แต่เวลาจะช่วยคุณอง</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td colspan="2">ไม่อยากรับรู้</td>
                        <td>ลองไปเที่ยวที่เงียบๆดูไหมครับ เผื่อจะอารมณ์ดีขึ้น</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-sm-4 pt-3 test-3">
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
                  <div class="col-sm-4 pt-3 test-3">
                    <div>
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
  name: "PieChart",
  props: {
    msg: String,
  },
  mounted() {
    console.log("Component mounted.");

    const ctx = document.getElementById("myChart");

    const data = {
      labels: ["การงาน", "การเงิน", "ความรัก", "ครอบครัว", "ชีวิต"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100, 200, 150],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(102, 102, 255)",
            "rgb(153, 102, 255)",
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

<style>
.piechart {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}

.AllPost-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* margin-right: 5px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.AllPost-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.AllPost-3 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.AllPost-4 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.AllPost-5 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostLife-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostLife-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostLife-3 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostLife-4 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostLife-5 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostStudy-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostStudy-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.PostStudy-3 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.test-2 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
.test-3 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
}
</style>
