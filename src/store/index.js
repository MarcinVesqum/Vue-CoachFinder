import { createStore } from "vuex";
import coachesModule from './modules/coaches/coaches.js';
import requestsModule from './modules/requests/requests.js'



const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: 'c1'
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});


export default store;