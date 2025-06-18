import { createStore } from 'vuex';

const store = createStore({
    state: {
        loggedIn: false,
        loadingCount: 0,
        userId: 0,
        userName: "",
        userMail: "",
        userImgUrl: "",
        selectedIndex: 0
    },
    mutations: {
        logged(state, loggedIn) {
            if (loggedIn) {
                state.loadingCount++;
                state.loggedIn = true;
            } else if (state.loadingCount > 0) {
                state.loadingCount--;
                state.loggedIn = (state.loadingCount > 0);
            }
        },
        setUserId(state, userId) {
            state.userId = userId;
        },
        setUserName(state, userName) {
            state.userName = userName;
        },
        setUserMail(state, userMail) {
            state.userMail = userMail;
        },
        setUserImgUrl(state, userImgUrl) {
            state.userImgUrl = userImgUrl;
        },
        removeAll(state) {
            state.userId = 0;
            state.userName  = "";
            state.userMail  = "";
            state.userImgUrl  = "";
        },
        selectedIndex(state, index) {
            state.selectedIndex = index;
        }
    },
    actions: {

    },
    getters: {
        loggedState: (state): boolean => state.loggedIn,
        userId: (state): number => state.userId,
        userName: (state): string => state.userName,
        userMail: (state): string => state.userMail,
        userImgUrl: (state): string => state.userImgUrl,
        selectedIndex: (state): number => state.selectedIndex
    },
});

export default store;