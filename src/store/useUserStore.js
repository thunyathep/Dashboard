import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";

export const useUserStore = defineStore("userStore", () => {
    
    const storeUser = ref([])

    const saveUsers = async () => {
        try {
            const res = await axios.get('https://jitd-backend.onrender.comv1/users/id')
            console.log(res.status)
            storeUser.value = res.data
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return { storeUser, saveUsers }
})