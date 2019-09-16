import Vue from 'vue';

export const store2 = Vue.observable({
    count: 0 as number,
});

const mutations2 = {
    setCount(count: number) {
        store2.count = count;
    },
};

export const actions2 = {
    setCount(count: number) {
        mutations2.setCount(count);
    },
};
