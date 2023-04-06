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
        Authorization : `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })

    // function get stress 
    const fetchTests = async ()=> {
      
        try {
          // const res = await reqInstance.get('https://jitd-backend.onrender.com/v1//posts/')
          const res = await reqInstance.get('https://jitd-backend.onrender.com/v1/test/stress/')
          console.log(res.data)
          res.data.sort((a, b)=> parseInt(a.number) - parseInt(b.number))

          // assign to testStress variable 
          testStress.value = res.data
          pageTotal.value = Math.floortestStress.value / 2


          testTemp.value = testStress.value.slice(0, 10)
          

          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }

    // function get consult 

    return { testStress, testConsult, fetchTests, testTemp}
})