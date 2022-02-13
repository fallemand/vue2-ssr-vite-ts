/** Vuex Store */
import Vue from 'vue';
import Vuex, {
  ActionContext,
  ActionTree,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';

Vue.use(Vuex);

export interface RootState {
  /*
  exampleData: any | null;
  */
}

/** State */
const state: RootState = {};

/** Getters */
const getters: GetterTree<RootState, RootState> = {};

/** Mutation */
const mutations: MutationTree<RootState> = {};

/** Action */
const actions: ActionTree<RootState, RootState> = {
  exampleAction(context: ActionContext<RootState, RootState>, data: any) {
    context.commit('exampleMutation', data);
  },
};

// VuexStore
const store: StoreOptions<RootState> = {
  // https://next.vuex.vuejs.org/guide/strict.html#development-vs-production
  strict: import.meta.env.DEV,
  state,
  getters,
  mutations,
  actions,
  modules: {
    // SomeModule,
  },
};

export default new Vuex.Store<RootState>(store);
