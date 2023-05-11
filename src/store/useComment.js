import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '../store/useAuthStore'

export const useComment = defineStore('useComment', () => {

    const commentStore = ref([])
    const commentTemp = ref([])
    const pageNumber = ref(0)
    const pageTotal = ref(0)
    const indexStart = ref(0)
    const indexEnd = ref(0)

    let reqInstance = axios.create({
        headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        }
    })

    // function get stress
    const fetchComments = async () => {
        try {
            const res = await reqInstance.get('https://jitd-backend.onrender.com/v1/posts/')
            // const res = await reqInstance.get('http://localhost:3000/v1/comment/')
            console.log(res.data)
            res.data.sort((a, b) => parseInt(a.number) - parseInt(b.number))

            // assign to testStress variable
            commentStore.value = res.data
            pageTotal.value = commentStore.value.length / 10
            pageNumber.value = 1
            indexStart.value = 0
            indexEnd.value = commentStore.value.length

            // assign pageination
            commentTemp.value = commentStore.value.slice(0, (pageNumber.value * 10))

            console.log(commentTemp.value)
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    const selectPage = (number) => {
        pageNumber.value = number
        indexStart.value = (number - 1) * 10
        indexEnd.value = number * 10
        commentTemp.value = commentStore.value.slice(indexStart.value, indexEnd.value)
    }
    return {
        commentStore,
        commentTemp,
        pageNumber,
        pageTotal,
        indexStart,
        indexEnd,
        fetchComments,
        selectPage
    }
})