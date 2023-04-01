<template>
  <main class="setting-page">
    <h1>Setting</h1>
    <p>This is the setting page</p>
    <div class="d-flex align-items-start">
      <div
        class="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          class="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Account Basics
        </button>
        <button
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Profile
        </button>
        <button
          class="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
        Notifications
        </button>
        <button
          class="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Social Networks
        </button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-messages"
          role="tabpanel"
          aria-labelledby="v-pills-messages-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
        >
          ...
        </div>
      </div>
    </div>
    <div>
      <button
        type="btn-logout"
        class="btn-logout"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Logout
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Confirm Logout admin system
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-cancle mx-2"
              data-bs-dismiss="modal"
            >
              cancle
            </button>
            <button
              type="button"
              class="btn-logout"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="handlerSignOut"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useAuthStore } from "../store/useAuthStore";

const store = useAuthStore();

const handlerSignOut = async () => {
  store.signOutFirbase();
};
</script>

<style lang="scss">
.setting-page {
  padding: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
}
.d-flex align-items-start {
  background-color: turquoise;
  display: flex;
  align-items: flex-start;
}
.btn-logout {
  background-color: rgb(221, 83, 83);
  width: 5rem;
  border-radius: 5px;
  color: #ffff;
}
.btn-cancle {
  background-color: rgb(214, 214, 214);
  width: 5rem;
  border-radius: 5px;
  color: #ffff;
}
</style>
