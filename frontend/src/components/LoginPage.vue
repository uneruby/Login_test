<template>
  <input v-model="authId" type="text" placeholder="UserName">
  <input v-model="authPass" type="password" placeholder="PassWord">
  <button @click="post">ログイン</button>
</template>

<script>
import { authStore } from '../stores/userAuth';
// const Store = authStore();
// console.log(Store)

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      msg: "UserIDとPasswordを入力してください",
      authId: "",
      authPass: "",
    }
  },
  methods: {
    async post() {
      const data = { id: this.authId, pass: this.authPass };
      console.log(data);
      this.msg = await this.$axios.post('/auth', data)
        .then(function(response){
          console.log(response);
          return response.data.message;
        })
        .catch(function(error){
          console.log(error);
          return error.message;
        })

      if(this.msg == "OK"){
        const Store = authStore();
        Store.auth(this.authId);
        this.$router.push('/Page1')
      }

    }
  }
}

</script>

