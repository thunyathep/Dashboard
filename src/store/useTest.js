import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios"
import { useAuthStore } from '../store/useAuthStore'


export const useTest = defineStore("userStore2", () => {

    const testStress = ref([])
    const testConsult = ref([])

    const storeAuth = useAuthStore();
    console.log("================================")
    console.log("token => " + storeAuth.token)
    console.log("================================")
    let reqInstance = axios.create({
      headers: {
        Authorization : `Bearer ${storeAuth.token}`
        }
      })

    // function get stress 
    const fetchUsers = async ()=> {
      console.log("================================")
      console.log("token => " + storeAuth.token)
      console.log("================================")
      
        try {

          console.log("cccccccccccc")
          console.log(storeAuth)
          // const res = await reqInstance.get('https://jitd-backend.onrender.com/v1//posts/')
          const res = await reqInstance.get('http://localhost:3000/v1/posts/')

          res.request

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