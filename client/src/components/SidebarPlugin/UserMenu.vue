<template>
    <div class="user">
        <div class="photo">
            <img :src="avatar"/>
        </div>
        <div class="info">
            <a data-toggle="collapse" @click="toggleMenu" href="javascript:void(0)">
        <span>
        Kawsar Ahmed
        <b class="caret"></b>
        </span>
            </a>
            <div class="clearfix"></div>
            <div style="margin-left: 3em;">
                <el-collapse-transition>
                    <ul class="nav" v-show="!isClosed">
                        <li>
                            <a href="javascript:void(0)">
                                <span class="sidebar-normal">My Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <!--<span class="sidebar-mini">Ep</span>-->
                                <span class="sidebar-normal">Edit Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <!--<span class="sidebar-mini">Ep</span>-->
                                <span class="sidebar-normal">Change Password</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="text-danger">
                                    <!--<span class="sidebar-mini">L</span>-->
                                    <span class="sidebar-normal">Log Out</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>

<script>
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
    // import EventBus from "../../../EventBus";

    export default {
        components: {
            [CollapseTransition.name]: CollapseTransition
        },

        data() {
            return {
                isClosed: true,
                avatar: 'https://avatars.githubusercontent.com/u/10576316?s=400&u=e6f62f3d8ba7f7284cca682f64bab9ec9c55e61d&v=4'
            }
        },

        methods: {
            toggleMenu() {
                this.isClosed = !this.isClosed
            },
            // logoutUser() {
            //     this.$localStorage.clear();
            //     this.$router.push({name: 'login'});
            // },
            // profileEditPage() {
            //     this.$router.push({name: 'ProfileEdit'});
            // },
            // profilePage() {
            //     this.$router.push({name: 'ProfileView'});
            // },
            // passwordChange() {
            //     this.$router.push({name: 'ChangePasswordView'})
            // }
        },
    }
</script>

<style>
    .collapsed {
        transition: opacity 1s;
    }
</style>