import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios"
import { useAuthStore } from '../store/useAuthStore'


export const useTest = defineStore("userStore2", () => {

  const testStress = ref([])
  const testConsult = ref([])

  const testTemp = ref([])
  const pageNumber = ref(0)
  const pageTotal = ref(0)
  const indexStart = ref(0)
  const indexEnd = ref(0)

  let reqInstance = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
    }
  })

  // function get stress 
  const fetchTests = async () => {

    try {
      // const res = await reqInstance.get('https://jitd-backend.onrender.com/v1//posts/')
      const res = await reqInstance.get('https://jitd-backend.onrender.com/v1/test/stress/')
      // const res = await reqInstance.get('http://localhost:3000/v1/test/stress/')
      console.log(res.data)
      res.data.sort((a, b) => parseInt(a.number) - parseInt(b.number))


      // assign to testStress variable 
      testStress.value = res.data
      pageTotal.value = testStress.value.length / 10
      pageNumber.value = 1
      indexStart.value = 0
      indexEnd.value = testStress.value.length

      // assign pageination 
      testTemp.value = testStress.value.slice(0, (pageNumber.value * 10))

      console.log(testTemp.value)

    }
    catch (error) {
      alert(error)
      console.log(error)
    }
  }

  const selectPage = (number) => {
    pageNumber.value = number
    indexStart.value = ((number - 1) * 10) 
    indexEnd.value = (number * 10 ) 
    testTemp.value = testStress.value.slice(indexStart.value, indexEnd.value)

  }
  return { testStress, testConsult, fetchTests, testTemp, pageTotal, pageNumber, indexStart, selectPage }
})