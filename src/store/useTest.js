import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios"
import { useAuthStore } from '../store/useAuthStore'


export const useTest = defineStore("userStore2", () => {

    const testStress = ref([])
    const testConsult = ref([])
    let reqInstance = axios.create({
      headers: {
        Authorization : `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })

    // function get stress 
    const fetchUsers = async ()=> {
      
        try {
          // const res = await reqInstance.get('https://jitd-backend.onrender.com/v1//posts/')
          const res = await reqInstance.get('http://localhost:3000/v1/test/stress/')
          console.log(res.data)
          testStress.value = res.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }

    // function get consult 

    return { testStress, testConsult, fetchUsers}
})