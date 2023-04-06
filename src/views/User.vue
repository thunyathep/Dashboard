<script>
  
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
    components: { Bar },
    setup() {
      const chartData = reactive({
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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

<template>
    <main class="user-page">
      <div class="container">
        <div class="row">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            <div class="row">
              <h2>User page dashboard</h2>
              <div class="col-sm-11 my-3 barchart">
                <h3>Number of new users</h3>
                <Bar id="my-chart-id" :options="chartOptions" :data="chartData"/>
              </div>
              <div class="col-sm-11 my-3 table1">
                <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">First name</th>
                          <th scope="col">Last name</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Worabadin</td>
                          <td>Piammahamongkol</td>
                          <td>Online</td>
                        </tr>
                        <tr>
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
                        </tr>
                      </tbody>
                    </table>
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

<script>

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
  