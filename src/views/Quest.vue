<template>
  <main class="dailyquest-page">
    <h1> Test System Page </h1>
    <div class="container-fluid">
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
            <tbody v-if="store.testTemp.length > 0">
              <tr v-for="(item, index) in store.testTemp" class="m-2 test-row" @click="onClickToView(index)">
                <td scope="row">{{ item.number }}</td>
                <td scope="row">{{ item.questionText }}</td>
              </tr>
            </tbody>

            <tbody v-else>
              <tr>
                <td colspan="2" class="text-center">กำลังดาวน์โหลด...</td>
              </tr>
            </tbody>
          </table>

          <div>
            <nav aria-label="Page navigation example">
              <ul class="pagination text-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li v-for="(item, index) in store.pageTotal" :key="item.id" class="page-item"><a class="page-link"
                    href="#" @click="store.selectPage(index + 1)">{{ index + 1 }}</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-3 px-3">
        <div class="show-info-test p-5 quesion-header ">
          <div>
            <h2>Question</h2>
            <p v-if="Object.keys(DataOnClick).length > 0">{{ questionText }}</p>
          </div>
        </div>
        <div v-for="(item, index) in choices.value" class="show-info-test p-5 quesion-choice mt-3 ">
          <div class="row">
            <div class="col">
              <p>{{(index+1) + ". " +  item.text }}</p>
            </div>
            <div class="col">
              <p>{{ "point  " }} <span class="point">{{ item.value  }}</span></p>
            </div>
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

const choices = useTest();
const number = ref({});
const questionText = ref({});

onMounted(() => {
  store.fetchTests();
})

const onClickToView = (index) => {

  DataOnClick.value = store.testStress[index]

  choices.value = DataOnClick.value.choices
  number.value = DataOnClick.value.number
  questionText.value = DataOnClick.value.questionText

  console.log(choices.value)
  console.log(number.value)
  console.log(questionText.value)

}

</script>

<style lang="scss">
.dailyquest-page {
  background-color: #ffff;
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}


.table-quest {
  margin-top: 5rem;
  width: 100%;
  table-layout: fixed;
  border: 0px solid #ffff;
}

.table-quest th {
  background-color: #1e293bb4;
  color: #d3d3d3;
  margin-left: 0.5rem;
}

.resizable-table td {
  height: 1rem;
}

.test-row:hover {
  cursor: pointer;
}

.quesion-choice{
  height: 2rem;
  background-color: #F8FAFA;
}
.point{
  font-weight: bold;
  font-size: 20px;
  color: #FFAD65;
}

</style>