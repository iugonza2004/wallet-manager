<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{$t("settings.pageTitle")}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <p>settiiings</p>
      <ion-button @click="signOutGoogle()">Log out</ion-button>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import authService from "@/services/AuthService";

export default defineComponent({
  name: "SettingsPage",
  components: { IonContent, IonPage, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonHeader },
  methods: {
    signOutGoogle: function () {
      authService.googleSignOut();
    }
  }
})
</script>

<style scoped>

</style>