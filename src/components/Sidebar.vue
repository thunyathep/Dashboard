<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="logo">
        <a href="/">
            <img class="pic-logo" src="../assets/github.png" alt="Vue">
        </a>
    </div>

    <div class="menu-toggle-wrap">
        <button class="menu-toggle">
            <span class="material-icons" @click="ToggleMenu">
                keyboard_double_arrow_right
            </span>
        </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
        <router-link class="button" to="/user">
            <span class="material-icons">person</span>
            <span class="text">User Page</span>
        </router-link>
        <router-link class="button" to="/post">
            <span class="material-icons">post_add</span>
            <span class="text">Post</span>
        </router-link>
        <router-link class="button" to="/comment">
            <span class="material-icons">forum</span>
            <span class="text">Comment</span>
        </router-link>
        <router-link class="button" to="/dailyquest">
            <span class="material-icons">request_page</span>
            <span class="text">Daily Quest</span>
        </router-link>
        <router-link class="button" to="/report">
            <span class="material-icons">report_page</span>
            <span class="text">Report</span>
        </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
        <router-link class="button" to="/setting">
            <span class="material-icons">settings</span>
            <span class="text">Setting</span>
        </router-link>
    </div>

  </aside>
</template>

<script setup>
import{ ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

    const ToggleMenu = () =>{
        is_expanded.value = !is_expanded.value

        localStorage.setItem("is_expanded", is_expanded.value)
    }
</script>

<style lang="scss" scoped>
    aside{
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;
        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;

        .logo{
            margin-bottom: 1rem;
            img{
                width: 2rem;
            }
        }
        
        .menu-toggle-wrap{
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle{
                transition: 0.2s ease-out;
                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                }
                &:hover{
                    .material-icons{
                        color: var(--primary);
                        transform: translateX(0.5rem);
                    }
                }
            }
        }

        h3, .button .text{
            opacity: 0;
            transition: 0.3s ease-out;
        }

        h3{
            color: var(--grey);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;text-transform: uppercase;
        }

        .flex{
            flex: 1 1 0;
        }
        
        .menu{
            margin: 0 -1rem;

            .button{
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem;
                transition: 0.2s ease-out;

                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                .text{
                    color: var(--light);
                    transition: 0.2s ease-out;
                }


                &:hover, ~&.router-link-exact-active{
                    background-color: var(--dark-alt);

                    .material-icons, .text{
                        color: var(--primary);
                    }
                }

                .router-link-exact-active{
                    border-right: 5px solid var(--primary);
                }
            }

        }

        &.is-expanded{
            width: var(--sidebar-width);

            .menu-toggle-wrap{
                top: -3rem;
                .menu-toggle{
                    transform: rotate(-180deg);
                }
            }
            h3, .button .text{
            opacity: 1;
            }

            .button{
                .material-icons{
                    margin-right: 1rem;
                }
            }
        }

        @media(max-width: 768px){
            position: fixed;
            z-index: 99;
        }
    }
</style>