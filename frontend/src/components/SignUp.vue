<template>
    <div>
        <input v-model="authId" type="text" placeholder="UserName">
    </div>
    <div>
        <input v-model="authPass" type="password" placeholder="PassWord">
    </div>
    <div>
        <input type="checkbox" v-on:click="signUp">
    </div>
    <!-- <di>
        <button v-on:click="signUp">登録</button>
    </di> -->
    <div>
        <RouterLink to="/Login">ログインページへ</RouterLink>
    </div>
</template>

<script>

export default {
    name: "SignUp",
    data() {
        return{
            authId: "",
            authPass: "",
        }
    },
    methods: {
        async signUp() {
            const data = {id: this.authId, pass: this.authPass}
            await this.$axios.post("/signUp",data).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });
        }
    }
}

</script>