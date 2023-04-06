<template>
  <main class="dailyquest-page">
    <h1> Test System Page </h1>
    <div class="container-fluid">
      <div class="row">
        <button class="col-5 col-md-1 my-3 p-2 test-5 mx-3 test-stress-btn ">
          test-stress
        </button>
        <button @click="store.fetchTests" class="col-5  col-md-1 my-3 p-2 test-2 mx-3 test-consult-btn "
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

          <div>
            <nav aria-label="Page navigation example">
              <ul class="pagination text-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li v-for="(item, index) in store.pageTotal" class="page-item"><a class="page-link" href="#"
                    @click="store.selectPage(index + 1)">{{ index + 1 }}</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 my-3 px-3 ">
        <div class="show-info-test p-5">
          <!-- <h1>{{ DataOnClick.value.questionText}}</h1> -->

          <!-- # show a qiuestion  -->
          <div>
              <h4>Question</h4>
              <p>ปวดหรือเกร็งกล้ามเนื้อบริเวณท้ายทอย หลัง หรือไหล่</p>
            </div>
          <div>
            <h4>choices</h4>
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
  store.fetchTests();
})

const onClickToView = (index) => {
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