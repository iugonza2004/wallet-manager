<template>

  <ion-page>

    <ion-header :translucent="true">

    </ion-header>

    <ion-content :fullscreen="true">
      <p>Loginnnnnnn</p>
      <ion-button @click="login()"></ion-button>

    </ion-content>

  </ion-page>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonContent, IonHeader, IonPage, toastController} from "@ionic/vue";
import router from "@/router";
import { googleSdkLoaded } from "vue3-google-login";
import authService from "@/services/AuthService";
import userDataService from "@/services/UserDataService";
import store from "@/store/store";


export default defineComponent({
  name: "LoginPage",
  components: { IonContent, IonPage, IonHeader },
  data() {
    return {

    }
  },
  beforeMount() {

    if (localStorage.getItem("token") != null) {
      router.replace("/HomePage")
    }
  },
  methods: {
    login() {
      googleSdkLoaded(google => {
        google.accounts.oauth2
            .initCodeClient({
              client_id:
                  "652192299119-nfokti692scj9dvcpibd5rjdpev9md1l.apps.googleusercontent.com",
              scope: "email profile openid",
              redirect_uri: "http://localhost:8100",
              callback: response => {
                if (response.code) {
                  this.getTokenAndSetUserData(response.code);
                }
              }
            })
            .requestCode();
      });
    },
    async getTokenAndSetUserData(code: any) {
      try {
        localStorage.setItem("token", await authService.getUserToken(code))

        store.commit('setUserData', await userDataService.getUserData(localStorage.getItem("token")));

        this.$router.replace("/HomePage");

      } catch (error: any) {
        const toast = await toastController.create({
          message: error.response.data,
          duration: 1500,
          position: "bottom",
        });
        await toast.present();
      }
    }
  }
})
</script>

<style scoped>

</style>