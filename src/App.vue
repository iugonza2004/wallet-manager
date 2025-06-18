<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu v-if="store.getters.loggedState" content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-item v-if="store.getters.userImgUrl" class="menu_user_info" lines="none">
              <ion-avatar slot="start">
                <img alt="Profile photo" :src="store.getters.userImgUrl" />
              </ion-avatar>
              <ion-label>{{store.getters.userName}}<p>{{store.getters.userMail}}</p></ion-label>
            </ion-item>

            <ion-item v-else class="menu_user_info" lines="none">
              <ion-avatar slot="start">
                <img alt="Profile photo" :src="thumbNailAvatarImgURL"/>
              </ion-avatar>
              <ion-label>{{store.getters.userName}}<p>{{store.getters.userMail}}</p></ion-label>
            </ion-item>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="store.commit('selectedIndex', i)" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: store.getters.selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
  IonAvatar
} from '@ionic/vue';

import { defineComponent } from 'vue';
import {
  home,
  settings,
  statsChart,
  logoUsd,
  wallet, albums
} from 'ionicons/icons';
import store from "@/store/store";

export default defineComponent({
  name: "App",
  computed: {
    store() {
      return store
    }
  },
  components: { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle,
                IonRouterOutlet, IonSplitPane, IonAvatar },
  data() {
    const thumbNailAvatarImgURL = "https://ionicframework.com/docs/img/demos/avatar.svg";

    const appPages = [
      {
        title: this.$t("home.pageTitle"),
        url: '/HomePage',
        iosIcon: home,
        mdIcon: home,
      },
      {
        title: this.$t("accounts.pageTitle"),
        url: '/AccountsPage',
        iosIcon: logoUsd,
        mdIcon: logoUsd
      },
      {
        title: this.$t("piggybanks.pageTitle"),
        url: '/PiggyBanksPage',
        iosIcon: wallet,
        mdIcon: wallet
      },
      {
        title: this.$t("stats.pageTitle"),
        url: '/StatsPage',
        iosIcon: statsChart,
        mdIcon: statsChart
      },
      {
        title: this.$t("categories.pageTitle"),
        url: '/CategoriesPage',
        iosIcon: albums,
        mdIcon: albums
      },
      {
        title: this.$t("settings.pageTitle"),
        url: '/SettingsPage',
        iosIcon: settings,
        mdIcon: settings
      },
    ];

    return {
      appPages,
      thumbNailAvatarImgURL,
    }
  },
  beforeMount() {

  }
})

</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
  padding-top: 0;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.menu_user_info {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
  border-radius: 0 !important;
}

</style>
