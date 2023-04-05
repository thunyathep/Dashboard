<template>
  <main class="dailyquest-page">
    <h1>Daily Quest</h1>
    <p>This is the daily quest</p>
    <div class="container-fluid">
      <div class="row">
        <button class="col-5 col-md-1 my-3 p-2 test-1 mx-3 test-stress ">
          test-stress
        </button>
        <button class="col-5  col-md-1 my-3 p-2 test-2 mx-3 test-consult ">
          test-consult
        </button>
        <div class="col-12 my-3 p-md-5  table-data ">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="col-1">id</th>
                  <th scope="col" class="col-4">question</th>
                  <th scope="col" class="col-2">weigth</th>
                  <th scope="col" class="col-4"></th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="(item, index) in store.testStress" class="m-2">
                  <th scope="row" >{{item.id}}</th>
                  <th scope="row" >{{item.email }}</th>
                  <th scope="row" >2</th>
                  <th scope="row" >
                      <button class="btn-test mx-3 px-3">Edit</button>
                      <button class="btn-test mx-3 px-3">Add</button>
                      <button class="btn-test mx-3 px-3">delete</button>
                  </th>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from "vue";
import { useTest } from "../store/useTest";

const store = useTest();

onMounted(() => {
  // store.getTestStress();
  // store.getTestConsult();
});

</script>

<style lang="scss">
.test-consult {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #8FB2AC;

}

.test-stress {
  border: none;
  background-color: #CFE5E1;
  color: white;

}

.table-data{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}
.btn-test{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}

.test-1{
  background-color: #8FB2AC
}
</style>