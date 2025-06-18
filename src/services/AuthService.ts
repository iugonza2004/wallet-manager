import { GooglePlus } from "@ionic-native/google-plus";
import router from "@/router";
import store from "@/store/store";

export default {
    setUserData: function (user: any) {
        store.commit("setUserId", user.userId);
        store.commit("setUserName", user.displayName);
        store.commit("setUserMail", user.email);
        store.commit("setUserImgUrl", user.imageUrl);
    },
    googleSignIn: function (){
        GooglePlus.login({}).then(async (user) => {
            this.setUserData(user);
            store.commit("logged", true);
            await router.replace("/HomePage");
        }).catch((err) => {
            switch (err) {
                case 12501:
                    // user cancel signin
                    break
                default:
                    alert(`Error: ${err}`)
            }
        });
    },

    googleSignOut: function (){
        GooglePlus.logout().then(async (res) => {
            store.commit("removeAll");
            store.commit("logged", false);
            store.commit("selectedIndex", 0);
            await router.replace("/LoginPage");
        }).catch((err) => {
            console.log('err', err)
        });
    }
}