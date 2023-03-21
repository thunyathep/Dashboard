<template>
    <main class="setting-page">
        <h1>Setting</h1>
        <p>This is the setting page</p>
        <div>
            <button type="btn-logout" class="btn-logout" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Logout
            </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Confirm Logout admin system</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn-cancle mx-2" data-bs-dismiss="modal">cancle</button>
                        <button type="button" class="btn-logout " data-bs-dismiss="modal" aria-label="Close" @click="handlerSignOut"   >logout</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useAuthStore } from "../store/useAuthStore"

const store = useAuthStore();

const handlerSignOut = async () => {
    store.signOutFirbase()
}

</script>

<style lang="scss" >
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