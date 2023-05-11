<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
import { DoughnutChart, BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import {useUserStore} from "../store/useUserStore";

Chart.register(...registerables);



export default defineComponent({
  name: 'Home',
  components: { BarChart },
  setup() {
    const userStore = useUserStore();
    const usertemp = userStore.userTemp;
    // const countMonth = ref([]);
    // const countMonthName = ref([]);

    onMounted(() => {
      userStore.saveUsers();
      userStore.countUsersByMonth();
      userStore.countUsersByMonthName();
    })

    // fetch data from store 

    
    // ! data in chart 
    const testData = {
      labels: userStore.countMonthName,
      datasets: [
        {
          // data fetch from api 
          // data: [30, 40, 60, 70, 5],
          data: userStore.countMonth,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { testData };
  },
});
</script>

<template>
  <main class="user-page">
    <div class="container">
      <div class="row">
        <div class="shadow-sm p-3 mb-5 bg-white rounded">
          <div class="row">
            <h2>User page dashboard</h2>
            <div class="dashboard">
              <div class="row">
                <div class="box">
                  <div class="box-header">
                    <div class="box-title">All time Users</div>
                      <div class="icon1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                      </div>
                  </div>
                  <div class="box-body">
                    <div class="box-data">21,000</div>
                  </div>
                </div>
                <div class="box">
                  <div class="box-header">
                    <div class="box-title">Today's Users</div>
                    <div class="icon1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    </div>
                  </div>
                  <div class="box-body">
                    <div class="box-data">2,300</div>
                  </div>
                </div>
                <div class="box">
                  <div class="box-header">
                    <div class="box-title">New clients</div>
                    <div class="icon1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                    </div>
                  </div>
                  <div class="box-body">
                    <div class="box-data">+3,462</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8 my-3 barchart">
              <h3>Number of new users</h3>
              <!-- <canvas ref="chart"></canvas> -->
              <!-- <canvas ref="chart" :ref="chartRef"></canvas> -->
              <BarChart :chartData="testData" />


            </div>
            <div class="col-sm-11 my-3 table1">
              <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">User id</th>
                        <th scope="col">Pet Name</th>
                        <th scope="col">Pet HP</th>
                        <th scope="col">Point</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <tr v-for="(item, index) in  usertemp" :key="index" class="m-2 test-row" @click="onClickToView(index)">
                        <th scope="row">{{ item.userID }}</th>
                        <th scope="row">{{ item.petName }}</th>
                        <th scope="row">{{ item.petHP }}</th>
                        <th scope="row">{{ item.point }}</th>
                        <th scope="row"><button class="delete-btn" @click="userStore.deleteUsers(item.userID)">Delete</button>
                          <button class="edit-btn" @click="buttonClicked">Edit</button></th>
                      </tr> -->
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
  .delete-btn{
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
  .edit-btn{
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
  /* height: 100%; */
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
  background-color: #f1f1f1;
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

.icon1{
  width: 24px;
  height: 24px;
}
</style>
  
