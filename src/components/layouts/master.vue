<template>
    <div class="header">
      <h2 class="logo">BeerDev</h2>
      <input type="checkbox" id="chk">
      <label for="chk" class="show-menu-btn">
        <!-- <b-icon icon="three-dots"></b-icon> -->
      </label>

      <ul class="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
        <label for="chk" class="hide-menu-btn">
          <!-- <b-icon icon="x"></b-icon> -->
        </label>
      </ul>
        <!-- <ul class="header">
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <<li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></li>
            <li v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
        </ul> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'navbar'
        }
    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .header {
    height: 100px;
    background: #34495e;
    padding: 0 20px;
    color: #fff;
  }
  .logo {
    line-height: 100px;
    float: left;
    text-transform: uppercase;
  }
  .menu {
    float: right;
    line-height: 100px;
  }
  .menu a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 10px;
    transition: 0.4s;
  }
  .show-menu-btn,.hide-menu-btn{
    transition: 0.4s;
    font-size: 30px;
    cursor: pointer;
    display: none;
  }
  .show-menu-btn{
    float: right;
  }
  .show-menu-btn i{
    line-height: 100px;
  }
  .menu a:hover,
  .show-menu-btn:hover,
  .hide-menu-btn:hover{
    color: #3498db;
  }

  .content{
    padding: 0 20px;
  }
  .content img{
    width: 100%;
    max-width: 700px;
    margin: 20px 0;
  }
  .content p{
    text-align: justify;
  }

  #chk{
    position: absolute;
    visibility: hidden;
    z-index: -1111;
  }

  @media screen and (max-width:800px) {
    .show-menu-btn,.hide-menu-btn{
      display: block;
    }
    .menu{
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #333;
      right: -100%;
      top: 0;
      text-align: center;
      padding: 80px 0;
      line-height: normal;
      transition: 0.7s;
    }
    .menu a{
      display: block;
      padding: 20px;
    }
    .hide-menu-btn{
      position: absolute;
      top: 40px;
      right: 40px;
    }
    #chk:checked ~ .menu{
      right: 0;
    }
  }
</style>