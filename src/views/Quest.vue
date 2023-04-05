<template>
  <main class="dailyquest-page">
    <h1>Daily Quest</h1>
    <p>This is the daily quest</p>
    <div class="container-fluid">
      <div class="row">
        <button class="col-5 col-md-1 my-3 p-2 test-5 mx-3 test-stress-btn ">
          test-stress
        </button>
        <button @click="store.fetchUsers" class="col-5  col-md-1 my-3 p-2 test-2 mx-3 test-consult-btn "
          data-bs-toggle="modal" data-bs-target="#exampleModal">
          test-consult
        </button>
      </div>
    </div>
    <div class="d-flex flex-wrap-reverse">
      <div class="col-12 col-md-6 my-3 p-md-5 table-data ">
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="col-1">id</th>
                <th scope="col" class="col-4">question</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in store.testTemp" class="m-2 test-row" @click="onClickToView(index)">
                <th scope="row">{{ item.number }}</th>
                <th scope="row">{{ item.questionText }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-6 my-3 px-3 ">
        <div class="show-info-test p-5">
          <!-- <h1>{{ DataOnClick.value.questionText}}</h1> -->

          <!-- # show a qiuestion  -->
          <div>
            <h4>question</h4>
            <p>dsfdsfdsfdsfdsfdsf</p>
          </div>
          <div>
            <h4>choice</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">View Test of Stress No. 1</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h4>Question</h4>
            <!-- <p>{{ DataOnClick.number }}</p> -->
            <h4>Choice</h4>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="col-1">id</th>
                  <th scope="col" class="col-4">question</th>
                  <th scope="col" class="col-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in store.testStress" class="m-2">
                  <th scope="row">{{ item.number }}</th>
                  <th scope="row">{{ item.questionText }}</th>
                  <th scope="row">
                    <button class="btn-test mx-3 px-3 bg bg-primary view-test">View</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-cancle mx-2" data-bs-dismiss="modal">cancle</button>
            <button type="button" class="btn-logout " data-bs-dismiss="modal" aria-label="Close"
              @click="handlerSignOut">Save</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useTest } from '../store/useTest'

const store = useTest();
const DataOnClick = ref({});
const dataShow = ref([]);

onMounted(() => {
  store.fetchUsers();
})

const onClickToView=(index)=>{
  DataOnClick.value = store.testStress[index]
}

</script>

<style lang="scss">
.dailyquest-page {
  background-color: #EBEDEF;
}

.test-consult-btn {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #8FB2AC;

}

.test-stress-btn {
  border: none;
  background-color: var(--primarySubtle);
  color: white;

}

.test-consult-btn:hover {
  background-color: var(--primaryDark);
}

.table-data {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.view-test {
  color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.show-info-test {

  background-color: var(--primarySubtle);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 80vh;
}

.test-row:hover {
  cursor: pointer;
}
</style>