import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import VuexPersistence from 'vuex-persist'

const  vuexLocal =new VuexPersistence({
    storage:window.localStorage
});
export default new Vuex.Store({
    plugins:[vuexLocal.plugin],
    state:{
        arr:{
            name:'',
            pass:'',
            yzm:'',
        }

    },
    getters:{

    },
    mutations:{
        denglu:function (state,obj) {
            state.arr.name=obj.name;
            state.arr.pass=obj.pass;
            state.arr.yzm=obj.yzm;
        }
    },
    actions:{

    },
    modules:{

    }
})



