export const state = () => ({
    token: '',
    isLogged: false,
    inProgress: false,
    isSuccess: false,
    isError: false
});

export const getters = {
    getToken: (state) => state.token,
    getIsLogged: (state) => state.isLogged,
    inProgress: (state) => state.inProgress,
    isSuccess: (state) => state.isSuccess,
    isError: (state) => state.isError,
};

export const mutations = {
    setToken(state, value) {
        state.token = value;
    },
    setLogged(state, value) {
        state.isLogged = value;
    },
    setInProgress(state, value) {
        state.inProgress = value;
    },
    setSucess(state, value) {
        state.isSuccess = value;
    },
    setError(state, value) {
        state.isError = value
    }
};

export const actions = {
    handleGetToken({commit}) {
        const token = this.$token.get('token');
        console.log(token);
    }
}
