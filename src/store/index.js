import { createStore } from "vuex";
import coachesModule from './modules/coaches/coaches.js';




const store = createStore({
    modules: {
        coaches: coachesModule
    },
});


export default store;