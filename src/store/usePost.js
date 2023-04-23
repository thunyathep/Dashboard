import { defineStore } from "pinia";
import { ref } from "vue";
import { async } from "@firebase/util";
import axios from "axios";

export const usePost = defineStore("usePost", () => {
  const postStore = ref([]);
  const postTemp = ref([]);
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

  // function get stress
  const fetchPosts = async () => {
    try {
      // const res = await reqInstance.get('https://jitd-backend.onrender.com/v1//posts/')
      const res = await reqInstance.get(
        "https://jitd-backend.onrender.com/v1/posts/"
      );
      // const res = await reqInstance.get('http://localhost:3000/v1/test/stress/')
      console.log("=====================================================");
      console.log(res.data);
      console.log(res.status);
      console.log("=====================================================");
      // res.data.sort((a, b) => parseInt(a.number) - parseInt(b.number));

      // assign to testStress variable
      postStore.value = res.data;
      pageTotal.value = postStore.value.length / 10;
      pageNumber.value = 1;
      indexStart.value = 0;
      indexEnd.value = postStore.value.length;

      // assign pageination
      postTemp.value = postStore.value.slice(0, pageNumber.value * 10);

      console.log(postTemp.value);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  const fetchEdit = async (content, category, date) => {
    try {
      const seedData = {
        "content": content,
        "category": category,
        "date": date,
      }
      reqInstance
        .put(`https://jitd-backend.onrender.com/v1/posts/${postId}}`)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const deleteItem = (postId) => {
    if (confirm("Are you sure you want to delete this item?")) {
      console.log(postId);
      reqInstance
        .delete(`https://jitd-backend.onrender.com/v1/posts/${postId}`)
        .then((res) => {
          alert(res.data.message);
          this.postStore.fetchPosts();
          console.log(res.status);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return {
    fetchPosts,
    postStore,
    postTemp,
    pageNumber,
    pageTotal,
    deleteItem,
    fetchEdit,
  };
});