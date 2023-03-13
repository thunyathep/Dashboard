import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Comments from '../views/comment.vue'
import Quest from '../views/Quest.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: User
        },
        {
            path: '/post',
            component: Post
        },
        {
            path: '/comment',
            component: Comments
        },
        {
            path: '/dailyquest',
            component: Quest
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/signup',
            component: SignUp
        }
    ]
})

export default router