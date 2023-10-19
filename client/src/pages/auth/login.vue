<template>
    <div>
        <div class="wrapper wrapper-full-page">
            <div class="full-page" data-color="azure"
                 data-image="@/assets/img/background/background-2.jpg">
                <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row text-center title-login-div">
                            <router-link class="title-login" to="/login">AMAR DIET</router-link>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                <form method="post" action="javascript:void(0)">
                                    <div class="card" data-background="color" data-color="blue">
                                        <div class="card-header">
                                            <h3 class="card-title">Login</h3>
                                        </div>
                                        <div class="card-content">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" placeholder="Enter email"
                                                       class="form-control input-no-border"
                                                       v-validate="userValidations.email"
                                                       name="email"
                                                       v-model="user.email">
                                                <span class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password"
                                                       class="form-control input-no-border"
                                                       v-validate="userValidations.password"
                                                       name="password"
                                                       v-model="user.password">
                                                <span class="text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button class="btn btn-fill btn-wd"
                                                    @click.prevent="login"
                                                    v-if="!loader">
                                                Let's go
                                            </button>
                                            <button class="btn btn-fill btn-wd"
                                                    v-else>
                                                Let's go <i class="fa fa-spinner fa-spin" v-if="loader"></i>
                                            </button>
                                            <div class="forgot">
                                                <router-link
                                                        :to="{name: 'forget-password'}">
                                                    Forgot your password?
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <content-footer></content-footer>

                <div class="full-page-background"
                     style="background-image: url('../../assets/img/background/background-1.jpg')">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import ContentFooter from "../../layout/dashboard/ContentFooter.vue";

let veeCustomMessage = {
    en: {
        custom: {
            email: {
                required: 'Email field is required',
                email: '',
            },
            password: {
                required: 'Password field is required',
            }
        }
    }
};

let userObj = {
    email: '',
    password: ''
};

Vue.use(VeeValidate, {
    dictionary: veeCustomMessage,
    fieldsBagName: userObj
});
export default {
    name: 'AuthLogin',
    components: {ContentFooter},
    data() {
        return {
            user: userObj,
            userValidations: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    min: 6
                }
            },
            loader: false,
        }
    }
}
</script>