import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Comments from '../views/comment.vue'
import Quest from '../views/Quest.vue'
import SignIn from '../views/SignIn.vue'
import Setting from '../views/Setting.vue'

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

        },
        {
            path: '/post',
            name: 'post',
            component: Post,

        },
        {
            path: '/comment',
            name: 'comment',
            component: Comments,

        },
        {
            path: '/dailyquest',
            name: 'dailyquest',
            component: Quest,

        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting,

        }
    ]
})

export default router