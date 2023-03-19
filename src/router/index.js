import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Comments from '../views/comment.vue'
import Quest from '../views/Quest.vue'
import SignIn from '../views/SignIn.vue'
import SideBar from '../components/SideBar.vue'
import { useAuthStore } from '../store/useAuthStore'

const requireAuth = (to, from, next) => {
    let store = useAuthStore()
    if (!store.user) {
        next({ name: 'signIn' })
    } else {
        next()
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/signIn',
            name: 'signIn',
            component: SignIn,
            beforeEnter: requireAuth
        },
        {
            path: '/',
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

        }
    ]
})

export default router