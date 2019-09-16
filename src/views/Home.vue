<template>
  <div>
    <div>
      <p>Count: {{ getCount }}</p>
      <button @click="setCount(count + 1);">+ 1</button>
      <button @click="setCount(count - 1);">- 1</button>
    </div>
    <div>
      <p>Count2: {{ count2 }}</p>
      <button @click="setCount2(count2 + 1);">+ 1</button>
      <button @click="setCount2(count2 - 1);">- 1</button>
    </div>
  </div>
</template>

<script script lang="ts">
import Vue from 'vue';
import { store, actions, getters } from '../store';
import {store2, actions2} from '../store2';

export default Vue.extend({
  computed: {
    getCount() {
      return getters.getCount();
    },
    count() {
      return store.count;
    },
    count2() {
      return store2.count;
    },
  },
  methods: {
    setCount: actions.setCount,
    setCount2: actions2.setCount,
  },
});
</script>