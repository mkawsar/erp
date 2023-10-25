import { defineStore } from 'pinia';

interface ILoginUser {
    email: string,
    password: string
};

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false
    }),
})
