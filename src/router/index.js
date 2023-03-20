import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Comments from '../views/comment.vue'
import Quest from '../views/Quest.vue'
import SignIn from '../views/SignIn.vue'
import Setting from '../views/Setting.vue'
import SideBar from '../components/SideBar.vue'
import { useAuthStore } from '../store/useAuthStore'
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../config.js'


const requireAuth =  async (to, from, next) => {
    const store = useAuthStore();
   if(store.isLogin){
    console.log(store.isLogin)
    next()
   }else{
    console.log(store.isLogin)
    next({ name: 'signIn' })
   }

}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/signIn',
            name: 'signIn',
            component: SignIn,

        },
        {
            path: '/user',
            name: 'user',
            component: User,
            beforeEnter: requireAuth

        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            beforeEnter: requireAuth

        },
        {
            path: '/comment',
            name: 'comment',
            component: Comments,
            beforeEnter: requireAuth

        },
        {
            path: '/dailyquest',
            name: 'dailyquest',
            component: Quest,
            beforeEnter: requireAuth
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting,
            beforeEnter: requireAuth
        }
    ]
})

export default router