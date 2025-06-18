<template>
  <ion-page>

    <ion-content :fullscreen="true">

      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/all.css'>

      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input type="text" class="login__input" placeholder="User name / Email">
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password">
              </div>
              <button class="button login__submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div class="social-login" slot="fixed">
              <h2>Log in via</h2>
              <div class="social-icons">
                <a @click="signInGoogle()" class="social-login__icon fab fa-google"></a>
                <a class="social-login__icon fab fa-github"></a>
                <a class="social-login__icon fab fa-linkedin"></a>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
import { defineComponent } from 'vue'
import router from "@/router";
import store from "@/store/store";
import authService from "@/services/AuthService";

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonContent,
    IonPage,
  },
  beforeMount() {
      this.signInGoogle();
  },
  methods: {
    signInGoogle: function () {
      // authService.googleSignIn();
      router.replace("/HomePage");
      store.commit("logged", true);
    },
  }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

body {
  background: linear-gradient(90deg, #dcffca, #84ba65);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}

.screen {
  background: linear-gradient(90deg, #84ba65, #84ba65);
  position: relative;
  height: 100%;
  width: 100%;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #ffffff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #88c565;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #82c557, #84ba65);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #7aab57;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #84ba65;
}

.login__input {
  border: none;
  border-bottom: 2px solid #D1D1D4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: .2s;
  color: #84ba65;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #84ba65;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #D4D3E8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #84ba65;
  box-shadow: 0px 2px 2px #84ba65;
  cursor: pointer;
  transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #84ba65;
  outline: none;
}

.button__icon {
  font-size: 20px;
  margin-left: auto;
  color: #84ba65;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 190px;
  right: 65px;
  color: #ffffff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 25px 15px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #84ba65;
  transform: scale(1.2);
}

.social-login__icon:hover {
  transform: scale(2);
}
</style>
