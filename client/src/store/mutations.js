import * as types from './types';

export default {
    [types.MUTATE_PROJECT_INFORMATION]: (state, payload) => {
        state.value = payload;
    }
};
