import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useReport = defineStore("useReport", () => {
    const reportStore = ref([]);
    const reportTemp = ref([]);
    const pageNumber = ref(0);
    const pageTotal = ref(0);
    const indexStart = ref(0);
    const indexEnd = ref(0);


    // axios instance
    let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
    });
    const fetchReport = async () => {
        try{
            const res = await reqInstance.get("https://jitd-backend.onrender.com/v1/report/");
            console.log("=====================================================");
            console.log(res.data);
            console.log(res.status);
            console.log("=====================================================");
            reportStore.value = res.data;
            pageTotal.value = reportStore.value.length / 10;
            pageNumber.value = 1;
            indexStart.value = 0;
            indexEnd.value = reportStore.value.length;
            reportTemp.value = reportStore.value.slice(0, (pageNumber.value * 10));
            console.log(reportTemp.value);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };
    return {
        reportStore,
        reportTemp,
        pageNumber,
        pageTotal,
        indexStart,
        indexEnd,
        fetchReport,
    };
});