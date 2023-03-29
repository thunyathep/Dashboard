<template>
  <main class="signIn-page container-fluid">
    <div class="sign-up">
      <div
        class="bg-white p-5 w-75 d-flex justify-content-center align-items-center shadow-lg s"
        style="height: 600px; width: 700px"
      >
        <div
          class="d-flex justify-content-center text-center shadow-lg w-100 h-100"
        >
          <div class="w-50 text-white pt-5" style="background-color: cadetblue">
            <div>
              <img src="./assets/bear.png" />
            </div>
            <h1>Welcome</h1>
            <h1>Admin!</h1>
            <p>Thank You For Hard Work</p>
            <p>You're The Best For Your User</p>
          </div>
          <div class="w-50">
            <div class="d-flex justify-content-center align-items-center h-100">
              <form
                class="form-signIn text-center pt-5 mt-8 w-100"
                @submit.prevent="handlerSubmit"
              >
                <h2 class="mb-5">JitD Application Admin</h2>
                <input
                  type="tex"
                  v-model="email"
                  class="email w-75 my-1 p-1"
                  name="email"
                  id="email"
                  placeholder="Email address"
                /><br />
                <input
                  type="password"
                  v-model="password"
                  class="password w-75 my-1 p-1"
                  name="password"
                  id="password"
                  placeholder="Password"
                /><br />
                <button class="my-5 w-50 p-2">SignIn</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useAuthStore } from "../store/useAuthStore";
import { ref } from "vue";
// import bear from "../assets/bear.png";
const store = useAuthStore();

const email = ref("");
const password = ref("");

const handlerSubmit = async () => {
  console.log(email.value);
  console.log(password.value);
  store.signInFirebase(email.value, password.value);
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.signIn-page {
  background-image: url("https://images.unsplash.com/photo-1679231926688-ef9cdab5ed2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1391&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}

.form-signIn {
  background-color: #ffff;
  border-radius: 10px;
}

.form-signIn h2 {
  color: #3f4247;
  font-weight: bold;
}

.form-signIn input {
  background-color: #ffff;
  border: 2px rgb(197, 197, 197) solid;
  border-radius: 5px;
  padding-left: 1rem;
}

.form-signIn input:focus {
  border: 2px #7aaaaf solid;
  outline: none;
}

.form-signIn button {
  background-color: #ffad65;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  font-weight: bold;
  color: #ffff;
}

.form-signIn button:hover {
  background-color: #ea9e5c;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
}
</style>
