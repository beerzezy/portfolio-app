<template>
    <div>
        <form @submit.prevent="login" class="box-login">
            <h1>Login</h1>
            <input v-model="username" type="text" placeholder="username"/>
            <input v-model="password" type="password" placeholder="password"/>
            <input type="submit" name="" value="Login"/>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        mounted: function () {
            console.log(this.$store.state.token)
        },
        methods: {
            login () {
                console.log(this.username, this.password)
            }
        }
    }
</script>

<style>
    body {
        background: #2a323c;
    }
    .box-login {
        width: 380px;
        padding: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #191919;
        text-align: center;
        border-radius: 15px;
    }
    .box-login h1 {
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 500;
    }
    .box-login input[type = "text"],.box-login input[type = "password"] {
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #3498db;
        padding: 14px 10px;
        width: 240px;
        outline: none;
        color: #ffffff;
        border-radius: 24px;
        transition: 0.25s;
    }
    .box-login input[type = "text"]:focus,.box-login input[type = "password"]:focus {
        width: 280px;
        border-color: #2ecc71;
    }
    .box-login input[type = "submit"]{
        border:0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 14px 40px;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 0.25s;
        cursor:pointer;
    }
    .box-login input[type = "submit"]:hover{
        background: #2ecc71;
    }
</style>