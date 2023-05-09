import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";

export const useUserStore = defineStore("userStore1", () => {

    const storeUser = ref([])
    const userData = ref([])

    const userTemp = ref([])
    const pageNumber = ref(0)
    const pageTotal = ref(0)
    const indexStart = ref(0)
    const indexEnd = ref(0)

    const countMonth = ref([])
    const countMonthName = ref([])


    let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        }
    })

    const saveUsers = async () => {
        try {
            const res = await reqInstance.get('https://jitd-backend.onrender.com/v1/users/') // Data ผ่านจะถูกเก็บไว้ใน res (Response)
            // console.log(res.data)
            res.data.sort((a, b) => parseInt(a.number) - parseInt(b.number))
            userData.value = res.data

            storeUser.value = res.data
            pageTotal.value = storeUser.value.length / 10
            pageNumber.value = 1
            indexStart.value = 0
            indexEnd.value = storeUser.value.length

            // assign pageination
            userTemp.value = storeUser.value.slice(0, (pageNumber.value * 10))

            // console.log(userTemp.value)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }

    const deleteUsers = (userID) => {
        if (confirm("Are you sure na ?")) {
            console.log(userID);
            reqInstance.delete('https://jitd-backend.onrender.com/v1/users/${userID}/').then((res) => {
                alert(res.data.message);
                this.userStore.saveUsers();
                console.log(res.status);
            })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    const selectPage = (number) => {
        pageNumber.value = number
        indexStart.value = ((number - 1) * 10)
        indexEnd.value = (number * 10)
        userTemp.value = storeUser.value.slice(indexStart.value, indexEnd.value)

    }

    const countUsersByMonth = async () => {
        const userCounts = [];

        await storeUser.value.forEach(user => {
            const registerDate = new Date(user.registerDate);
            const monthYearKey = `${registerDate.getMonth() + 1}`;

            if (userCounts[monthYearKey]) {
                userCounts[monthYearKey]++;
            } else {
                userCounts[monthYearKey] = 1;
            }
        });

        // Extract the counts from the userCounts object into an array
        const countsList = Object.values(userCounts);

        console.log(countsList);

        // Return the list of counts
         countMonth.value = countsList
    };

    const countUsersByMonthName =  async () => {
        const users = storeUser.value;
        const userCounts = [];

        await storeUser.value.forEach(user => {
            const registerDate = new Date(user.registerDate);
            const monthYearKey = registerDate.toLocaleString('default', { month: 'long' });

            if (userCounts[monthYearKey]) {
                userCounts[monthYearKey]++;
            } else {
                userCounts[monthYearKey] = 1;
            }
        });

        // Extract the month names from the userCounts object into an array
        const monthList = Object.keys(userCounts);

        console.log(monthList);

        // Return the list of month names
        countMonthName.value = monthList
    };





    const fetchMonth = () => {
        // TODO: fetch user and map data 
        console.log("=====================")
        // use
        console.log(userStore.storeUser.values.toString)
        console.log("=====================")
        // const 
        return [30, 40, 60, 70, 5]
    }

    return { userData, storeUser, saveUsers, userTemp, pageTotal, pageNumber, indexStart, selectPage, deleteUsers, countUsersByMonth, countUsersByMonthName, countMonth, countMonthName}
})