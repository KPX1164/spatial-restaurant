import { defineStore } from 'pinia'
export const userStore = defineStore('user', {
    state: () => ({
        isLogin: false as boolean
    }),
    actions: {
        updateUser(isLogin: boolean) {
            this.isLogin = isLogin
        },
        getIsLogin() {
           return this.isLogin
        }
    }
})