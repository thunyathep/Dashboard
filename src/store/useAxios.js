import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
//import { async } from "@firebase/utiul";

export const useAxios = defineStore("useAxios", () => {
  const testStress = ref([]);
  const testConsult = ref([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data) ;
      testStress.value = response.data;
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return [testStress, testConsult, fetchUsers];
});
