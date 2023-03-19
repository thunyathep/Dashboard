<template>
    <main class="signIn-page">
        <form class="text-center" @submit.prevent="handlerSubmit">
            <h1>SignIn</h1>
            
            <label for="">Enter your email</label><br/>
            <input type="tex" v-model="email" class="" name="" id=""><br/>

            <label for=""><p>Enter tour password</p></label><br/>
            <input type="password" v-model="password" class="" name="" id=""><br/>

            <button class="btn-signIn my-5">SignIn</button>


        </form>
    </main>
</template>

<script setup>
import { useAuthStore } from "../store/useAuthStore"
import { ref } from "vue";

const store = useAuthStore();

const email = ref("")
const password = ref("")

const handlerSubmit=async()=>{
    
    console.log(email.value)
    console.log(password.value)

    store.signIn(email.value, password.value)
}
</script>

<style lang="scss">
.btn-signIn{
    background-color: rgb(222, 249, 187);
    width: 5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

</style>