<template>
  <div class="sign-up">
      <div class="bg-white p-5 w-75 d-flex justify-content-center align-items-center shadow-lg s" style="height: 600px; width: 700px;">
              <div class="d-flex justify-content-center text-center shadow-lg w-100 h-100">
                  <div class="bg-success w-50 text-white pt-5">
                      <h1>Welcome</h1>
                      <h1>Back!</h1>
                      <p>To keep connected with please login</p>
                      <p>with your personnal info</p>
                      <button class="rounded p-2 bg-transparent border border-white text-white">SIGN IN</button>
                  </div>
                  <div class="bg-white w-100 p-3 mt-5">
                      <h1>Create Account</h1>
                      <p>Enter your personal details and start</p>
                      <p>journey with us</p>
                      <form class="d-flex flex-column ">
                          <!-- <input  type="text" placeholder="Name"> -->
                          <input class="mt-5" type="email" placeholder="Email">
                          <input class="mt-5" type="password" placeholder="Password">
                      </form>
                      <button class="mt-4 p-2 rounded border border-success text-white bg-success">SIGN UP</button>
                  </div>
              </div>
      </div>
  </div>
</template>

<style>
.sign-up {
  background-image: url('https://images.unsplash.com/photo-1679231926688-ef9cdab5ed2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1391&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>