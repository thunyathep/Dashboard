import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";

export const useTest = defineStore("userStore2", () => {

    const testStress = ref([])
    const testConsult = ref([])

    // function get stress 
    const fetchUsers = async ()=> {
        try {
          const res = await axios.get('https://jsonplaceholder.typicode.com/users')
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