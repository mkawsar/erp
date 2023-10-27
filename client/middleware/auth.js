export default({store}) => {
    let token = window.localStorage.getItem('token');
    if(!token) {
        token = window.sessionStorage.getItem('token')
    }

    if (token) {
        store.commit('auth/setToken', token)
        store.commit('auth/setLogged', true)
    }
};
