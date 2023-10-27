import Vue from 'vue';
import Toasted from 'vue-toasted';

let options = {
    theme: 'bubble',
    position: 'top-right', 
    duration : 5000
};

Vue.use(Toasted, options);

Vue.toasted.register('e',
    (payload) => {
        // if there is no message passed show default message
        if(! payload.message) {
    	    return 'Oops.. Something Went Wrong..'
        }

        options.icon = 'error_outline';
        options.type = 'error';

        // if there is a message show it with the message
        return "Oops.. " + payload.message;
    },
    options
);

Vue.toasted.register('s',
    (payload) => {
        // if there is no message passed show default message
        if(! payload.message) {
    	    return 'This action has been worked successfully';
        }

        options.icon = 'check_circle';
        options.type = 'success';

        // if there is a message show it with the message
        return payload.message;
    },
    options
);

