import { defineStore } from "pinia";
import { auth } from '../config.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken } from "firebase/auth";
import { useRoute } from "vue-router";
import router from "../router/index.js";
import { ref } from "vue";
import { async } from "@firebase/util";

export const useAuthStore = defineStore("userStore", () => {

    const isLogin = ref(false)

    const init = async () => {
        try {
            await onAuthStateChanged(auth, async (user) => {
                if (user) {
                    await localStorage.setItem('TOKEN', user.accessToken)
                    isLogin.value = true
                    router.replace({ name: 'user' })
                    console.log(`TOKEN : ${user.accessToken}`)
                } else {
                    router.replace({ name: 'signIn' })
                }
            })
        } catch (error) {
            console.log("something wrong")
            console.log(error)
        }
    }

    const signInFirebase = async (email, password) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                router.replace({ name: 'user' })
                isLogin.value = true
            }
        } catch (error) {
            if (error == "FirebaseError: Firebase: Error (auth/user-not-found).") {
                alert("User not found")
            }
        }
    }

    const signOutFirbase = async () => {
        try {
            await signOut(auth)
            console.log("sigOut success")
            isLogin.value = false
            router.replace({ name: 'signIn' })
        } catch (error) {
            console.log(error)
        }
    }

    return { init, signInFirebase, signOutFirbase, isLogin }
})