<template>
  <ion-page>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{$t("accounts.pageTitle")}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <p>compteeees</p>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/vue";

export default defineComponent({
  name: "AccountsPage",
  components: {IonContent, IonPage, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonHeader}
})
</script>

<style scoped>

</style>