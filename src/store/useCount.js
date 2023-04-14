import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";

export const useCount = defineStore("useCount", () => {

    const count = ref(0)

    // function get stress 
    const increment =  ()=> {
        count.value++
    }
    const decrement =  ()=> {
        count.value--
    }
    const reset =  ()=> {
        count.value = 0
    }


    // function get consult 

    return { count, increment, decrement, reset}
})