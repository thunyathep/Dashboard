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
                  <div class="card-body">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ประเภท</th>
                          <th>ข้อความที่โพสต์</th>
                          <th>วันที่</th>
                          <th>การจัดการ</th>
                        </tr>
                      </thead>
                      <tbody v-if="PostStore.postTemp.length > 0">
                        <tr v-for="(item, index) in PostStore.postTemp" :key="index">
                          <td>{{ item.postId }}</td>
                          <td>{{ item.category }}</td>
                          <td>{{ item.content }}</td>
                          <td>{{ item.date }}</td>
                          <td>
                            <div @click="clickTosave(item.postId, item.content, item.category, item.date)">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                              Edit
                            </button></div>
                              <!-- The Modal -->
                            <div class="modal" id="myModal">
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <!-- Modal Header -->
                                  <div class="modal-header">
                                    <h4 class="modal-title">change data in post</h4>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                  </div>
                                <!-- Modal body -->
                                    <div class="modal-body">
                                      <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Category</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Category">
                                      </div>
                                      <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Content</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Content">
                                      </div>
                                      <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Date</label>
                                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Date">
                                      </div>
                                    </div>
                                <!-- Modal footer -->
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button @click = "PostStore.fetchEdit(Tempcontent.value ,Tempcategory.value, Tempdate.value)" type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                            <td>
                              <button @click="PostStore.deleteItem(item.postId)" class="btn btn-danger">Delete</button></td>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td colspan="4" class="text-center">กำลังดาวน์โหลด...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="col-sm-4 pt-3 test-3">
                    <div class="col-sm-3 my-3 pt-3 test-1">
                      <div class="card-body">
                        <h5 class="card-title">จำนวนการโพสต์ของปี 2565</h5>
                        <canvas id="myChart"></canvas>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4 pt-3 test-3">
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
                  <div class="col-sm-4 pt-3 piechart">
                    <canvas id="myChart"></canvas>
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
                      <h5 class="card-title">จำนวนการโพสต์ของปี 2565</h5>
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
                          <td>กระต่ายน้อย</td>
                          <td>สุขใจในโลกอับเฉา</td>
                          <td>คุณสามารถมีความสุขได้ด้วยตีวคุณเองนะ</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>พระอาทิตย์</td>
                          <td>ที่รักพระจันทร์</td>
                          <td>
                            ความรักนั้นคาดเดาได้ยากจริงๆครับ รักตัวเองมากๆ
                          </td>
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
                          <td>
                            ลองไปเที่ยวที่เงียบๆดูไหมครับ เผื่อจะอารมณ์ดีขึ้น
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-sm-4 pt-3 test-3">
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
                  <div class="col-sm-4 pt-3 test-3">
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
                  <div class="col-sm-4 pt-3 piechart">
                    <canvas id="myChart"></canvas>
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
                      <h5 class="card-title">จำนวนการโพสต์ของปี 2565</h5>
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
                          <td>กระต่ายน้อย</td>
                          <td>สุขใจในโลกอับเฉา</td>
                          <td>คุณสามารถมีความสุขได้ด้วยตีวคุณเองนะ</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>พระอาทิตย์</td>
                          <td>ที่รักพระจันทร์</td>
                          <td>
                            ความรักนั้นคาดเดาได้ยากจริงๆครับ รักตัวเองมากๆ
                          </td>
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
                          <td>
                            ลองไปเที่ยวที่เงียบๆดูไหมครับ เผื่อจะอารมณ์ดีขึ้น
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-sm-4 pt-3 test-3">
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
                  <div class="col-sm-4 pt-3 test-3">
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
                  <div class="col-sm-4 pt-3 piechart">
                    <canvas id="myChart"></canvas>
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

<script setup>
import { onMounted } from "vue";
import { usePost } from "../store/usePost";
import { ref } from "vue";

const PostStore = usePost();

const Tempcontent =  ref("")
const Tempcategory =  ref("")
const Tempdate =  ref("")

const clickTosave = (content, category, date) => {
  Tempcontent.value = content 
  Tempcategory.value = category, 
  Tempdate.value = date
}


onMounted(() => {
  PostStore.fetchPosts();
  // PostStore.fetchEdit();
});

</script>

<style>
.test-1 {
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test-3 {
  background-color: #f1f1f1;
  border: 1px solid #fffcfc;
  border-radius: 5px;
  padding: 20px;
}
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
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
