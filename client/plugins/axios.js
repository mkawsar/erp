export default function({ $axios, req, store}) {
    if (process.browser) {
        return;
    }

    const token = store.$cookies.get('token')

	if ( token ) {
		$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}
}
