<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { DoughnutChart, BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import { useUserStore } from "../store/useUserStore";

Chart.register(...registerables);

export default defineComponent({
  name: 'Home',
  components: { BarChart },

  setup() {
    const userStore = useUserStore();
    const testData = ref({
      loaded: false,
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    });

    onMounted(async () => {
      await userStore.fetchUsers();
      await userStore.countUsersByMonth();
      await userStore.countUsersByMonthName();

      testData.value.labels = userStore.countMonthName;
      testData.value.datasets[0].data = userStore.countMonth;
      testData.value.loaded = true;
    });

    return { testData, userStore };
  },
});
</script>


<template>
  <main class="user-page">
    <div class="container">
      <div class="row">
        <div class="p-3 mb-5 rounded container-fluid">
          <div class="row">
            <h2>User page dashboard</h2>

            <!-- ! show chart-data  -->
            <div class="my-3 barchart container-fluid ">
              <div class="row m3-5 bg-user-dashboard ">
                <div class="col">
                  <h3>Number of new users</h3>
                </div>

                <div class="col">
                  <!-- box-1-element  -->
                  <div>
                    <div class="box-header">
                      <div class="row">
                        <p class="col">All time Users</p>
                        <div class="icon1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path
                              d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="box-body">
                      <div class="box-data">{{ userStore.userData.length }}</div>
                    </div>
                  </div>

                </div>

              </div>

              <div v-if="userStore">
                <BarChart :chartData="testData" :width="100">
                  <Bar :barPercentage="0.8" :categoryPercentage="0.6" />
                </BarChart>
              </div>
            </div>

            <!-- ! show chart-data  -->
            <div class="col-sm-12 my-3 table1">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">User id</th>
                    <th scope="col">Pet Name</th>
                    <th scope="col">Pet HP</th>
                    <th scope="col">Point</th>
                    <!-- <th scope="col">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="userStore.userTemp" v-for="(item, index) in userStore.userTemp" :key="index"
                    class="m-2 test-row">
                    <td scope="row">{{ item.userID }}</td>
                    <td scope="row">{{ item.petName }}</td>
                    <td scope="row">{{ item.petHP }}</td>
                    <td scope="row">{{ item.point }}</td>
                    <!-- <th scope="row"><button class="delete-btn" @click="userStore.deleteUsers(item.userID)">Delete</button>
                          <button class="edit-btn" @click="buttonClicked">Edit</button></th> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.card-body {
  align-content: center;
}

.barchart {
  background-color: #ffff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}

.table1 {
  background-color: #ffff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}

.table {
  margin-top: 2rem;
  width: 100%;
  table-layout: fixed;
  border: 0px solid rgb(254, 254, 254);
}

.table th {
  background-color: #1e293bb4;
  color: #d3d3d3;
}

.delete-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 10px;
}

.delete-btn:hover {
  background-color: rgb(255, 119, 119);
}

.edit-btn {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn2:hover {
  background-color: lightblue;
}

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
}

.box {
  width: 300px;
  margin: 10px;
  padding: 20px;
  background-color: #ffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
  font-weight: 200;
}

.box-title {
  margin: 0;
}

.box-data {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.icon1 {
  width: 24px;
  height: 24px;
}
bg-user-dashboard{
  background-color: #ffff;
}
</style>
  
