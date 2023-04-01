import { defineStore } from "pinia";
import { useAxios } from "./useAxios";
import { async } from "@firebase/util";
import { ref } from "vue";
import axios from "axios";

export const useAxios = defineStore('useAxios', () => {
    const testStress = ref([]);
    const testConsult = ref([]);

    const fetchUsers = async () => {
        try{
            const response = await axios.get('https://jitd-backend.onrender.comv1/users');
            console.log(response.data);
        testStress.value = response.data;
    }
    catch (error) {
        console.log(error);
        alert(error.message);  
    }

    }
  return [testConsult, testConsult, response, fetchUsers];
});