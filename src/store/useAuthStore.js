import { defineStore } from "pinia";
import { auth } from '../config.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useRoute } from "vue-router";
import router from "../router/index.js";
import { ref } from "vue";
import { async } from "@firebase/util";

export const useAuthStore = defineStore("userStore", () => {

    const userLogin = ref({
        email: "",
        password: "",
    })

    const user = ref({})

    const signIn = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const init = async ()=>{
        try {
            const user = await onAuthStateChanged(auth, (user)=>{
                if(user == null){
                    router.replace({name: 'signIn'})
                }else{
                    router.replace({name: 'sidebar'})
                }
            })
        } catch (error) {
            console.log("something wrong")
            console.log(error)
        }
    }

    return { signIn, init, user, userLogin }
})