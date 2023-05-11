import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Post from '../views/Post.vue'
import Comments from '../views/comment.vue'
import Quest from '../views/Quest.vue'
import SignIn from '../views/SignIn.vue'
import Setting from '../views/Setting.vue'
import Report from '../views/Report.vue'
import Edit from '../views/crud/edit.vue'

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
            path: '/report',
            name: 'report',
            component: Report,
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting,

        },
        {
            path: '/src/views/crud/:postId/edit.vue',
            name: 'edit',
            component: Edit,

        }

    ]
})

export default router