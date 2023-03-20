<template>
    <main class="signIn-page container-fluid">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="d-flex justify-content-center col-md-6 col-12">
                <form class="text-center form-signIn pt-5 mt-5 w-100" @submit.prevent="handlerSubmit">
                    <h2 class="mb-5">JitD Application Admin</h2>
                    <input type="tex" v-model="email" class="email w-75 my-1 p-1" name="email" id="email"
                        placeholder="Email address"><br />
                    <input type="password" v-model="password" class="password w-75 my-1 p-1" name="password" id="password"
                        placeholder="Password"><br />
                    <button class="btn-signIn my-5 w-50 p-2">SignIn</button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </main>
</template>

<script setup>
import { useAuthStore } from "../store/useAuthStore"
import { ref } from "vue";

const store = useAuthStore();

const email = ref("")
const password = ref("")

const handlerSubmit = async () => {

    console.log(email.value)
    console.log(password.value)
    store.signIn(email.value, password.value)
}
</script>

<style lang="scss">
.signIn-page {
    background: rgb(83, 138, 173);
    background: linear-gradient(90deg, rgba(83, 138, 173, 1) 0%, rgba(170, 212, 204, 1) 100%);
    height: 100vh;
}

input {
    background-color: #ffff;
    border: 2px rgb(197, 197, 197) solid;
    border-radius: 5px;
    padding-left: 1rem;
}

input:focus {
    border: 2px #7AAAAF solid;
    outline: none;
}


.btn-signIn {
    background-color: #FFAD65;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    font-weight: bold;
    color: #ffff;
}

.btn-signIn:hover {
    background-color: #ea9e5c;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
}


.form-signIn {
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    border-radius: 10px;
}

.form-signIn h2 {
    color: #3F4247;
    font-weight: bold;
}
</style>