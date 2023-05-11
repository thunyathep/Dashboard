<template>
    <div class="contrainer mt-5">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">แก้ไขข้อมูล</h3>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">หมวดหมู่</label>
                    <input type="text" class="form-control"  id="category"  >
                </div>
                <div class="mb-3">
                    <label for="">ข้อความที่โพสต์</label>
                    <input type="text" class="form-control" id="content"  >
                </div>
                <div class="mb-3">
                    <label for="">วันที่โพสต์</label>
                    <input type="text" class="form-control" id="date" >
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="saveContent()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Edit',
    data() {
        return {
            model: {
                item: {
                    category: '',
                    content: '',
                    date: '',
                }
            }
        }
    },
    mounted() {
        this.getContentData(this.$route.params.postId);
    },
    methods: {

        getContentData(postId) {
            axios.get('https://jitd-backend.onrender.com/v1/posts/${postId}/edit.vue')
                .then((res) => {
                    this.model.item = res.data.item;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        saveContent() {
            axios.put('https://jitd-backend.onrender.com/v1/posts/' + this.$route.params.postId, this.model.item)
                .then((response) => {
                    this.$router.push('/crud');
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        updated() {
            this.getContentData(this.$route.params.postId);
        },
    }
}

</script>