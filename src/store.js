import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isButtonDisabled: false,
            isLoading: false,
        };
    },
    mutations: {
        setButtonDisabled(state, value) {
            state.isButtonDisabled = value;
        },
        setLoading(state, value) {
            state.isLoading = value;
        },
    },
    actions: {
        setButtonDisabled({ commit }, value) {
            commit('setButtonDisabled', value);
        },
        setLoading({ commit }, value) {
            commit('setLoading', value);
        },
    },
});

export default store;