import {LocalStorage} from '@/services/token.service';

export default ({ app }, inject) => {
    // create an instance of the LocalStorage
    const token = new LocalStorage();
    // inject the service, making it available in the context, component, store, etc.
    inject('token', token)
};
