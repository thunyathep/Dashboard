import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";
import { useAuthStore } from '../store/useAuthStore'


export const useTest = defineStore("userStore2", () => {

    const testStress = ref([])
    const testConsult = ref([])


    const storeAuth = useAuthStore();
    let reqInstance = axios.create({
      headers: {
        Authorization : `Bearer ${storeAuth.token}`
        }
      })

    // function get stress 
    const fetchUsers = async ()=> {
      
        try {
          const res = await reqInstance.get('https://jitd-backend.onrender.com/v1//posts/')
          console.log(res.data)
          testStress.value = res.data
          }
          catch (error) {
            alert(res.data)
            console.log(error)
        }
      }

    // function get consult 

    return { testStress, testConsult, fetchUsers}
})