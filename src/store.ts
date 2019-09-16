import Vue from 'vue';

export const store = Vue.observable({
  count: 0 as number,
});

export const getters = {
  getCount() {
    return store.count + 'x';
  },
};

const mutations = {
  setCount(count: number) {
    store.count = count;
  },
};

export const actions = {
  setCount(count: number) {
    mutations.setCount(count);
  },
};
