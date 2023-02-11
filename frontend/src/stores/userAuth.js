import { defineStore } from 'pinia'

export const authStore = defineStore('userAuth', {
  state:() => {
    return{
      isLogin: false,
      userId: "",
    }
  },
  actions: {
    auth(user) {
      this.isLogin = true;
      this.userId= user;
    }
  }
})
