export default ({store, redirect, route}) => {
    const isLogged = store.getters['auth/getIsLogged'];

    const beforeLogin = [
        '/auth/login',
        '/auth/login/',
    ];

    if (isLogged && beforeLogin.includes(route.path)) {
        redirect('/');
    } else if(!isLogged && !beforeLogin.includes(route.path)) {
        redirect('/auth/login');
    }

    return;
}
