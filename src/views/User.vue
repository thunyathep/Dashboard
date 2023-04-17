<script setup>
  import { useUserStore } from '../store/useUserStore';

  import Chart from 'chart.js/auto';

  import { onMounted, ref } from 'vue';
  
  const userStore = useUserStore();

  onMounted(() => {
    userStore.saveUsers();

    createBarChart();
  });

  function createBarChart() {
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Number of users',
            data: [12, 19, 3, 5, 2, 3, 20],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
            borderWidth: 1,
            barThickness: 50,
          }]
    },
    options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
  });
}
</script>

<template>
    <main class="user-page">
      <div class="container">
        <div class="row">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <div class="row">
              <h2>User page dashboard</h2>
              <div class="col-sm-8 my-3 barchart">
                <h3>Number of new users</h3>
                <canvas id="myChart"></canvas>
              </div>
              <div class="col-sm-11 my-3 table1">
                <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Pet Name</th>
                          <th scope="col">Pet HP</th>
                          <th scope="col">Point</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in userStore.userTemp" :key="index" class="m-2 test-row" @click="onClickToView(index)">
                          <th scope="row">1</th>
                          <th scope="row">{{ item.petName }}</th>
                          <th scope="row">{{ item.petHP }}</th>
                          <th scope="row">{{ item.point }}</th>
                        </tr>
                        <!-- <tr>
                          <th scope="row">1</th>
                          <td>Worabadin</td>
                          <td>Piammahamongkol</td>
                          <td>Online</td>
                        </tr> -->
                        <!-- <tr>
                          <th scope="row">2</th>
                          <td>Surawee</td>
                          <td>Kraikruan</td>
                          <td>Online</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Balloi</td>
                          <td>Loynarm</td>
                          <td>Offline</td>
                        </tr> -->
                      </tbody>
                    </table>
              </div>
            </div>
            <!-- <nav aria-label="Page navigation example">
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
            </nav> -->
            <!-- <nav aria-label="Page navigation example">
              <ul class="pagination text-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li v-for="(item, index) in userStore.pageTotal" :key="index" class="page-item"><a class="page-link" href="#"
                    @click="userStore.selectPage(index + 1)">{{ index + 1 }}</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav> -->
          </div>  
        </div>    
      </div>
    </main>
</template>

<style>

  .card-body{
    align-content: center;
  }
  .barchart {
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .table1 {
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
  