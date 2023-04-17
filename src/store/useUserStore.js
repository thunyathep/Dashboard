import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";

export const useUserStore = defineStore("userStore1", () => {
    
    const storeUser = ref([])

    const userTemp = ref([])
    const pageNumber = ref(0)
    const pageTotal = ref(0)
    const indexStart = ref(0)
    const indexEnd = ref(0)

    let reqInstance = axios.create({
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        }
    })

    const saveUsers = async () => {
        try {
            const res = await reqInstance.get('https://jitd-backend.onrender.com/v1/users/') // Data ผ่านจะถูกเก็บไว้ใน res (Response)
            console.log(res.data)
            res.data.sort((a, b) => parseInt(a.number) - parseInt(b.number))

            storeUser.value = res.data
            pageTotal.value = storeUser.value.length / 10
            pageNumber.value = 1
            indexStart.value = 0
            indexEnd.value = storeUser.value.length

            // assign pageination 
            userTemp.value = storeUser.value.slice(0, (pageNumber.value * 10))
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
        userTemp.value = storeUser.value.slice(indexStart.value, indexEnd.value)
    
    }

    return { storeUser, saveUsers, userTemp, pageTotal, pageNumber, indexStart, selectPage }
})