import { defineStore } from 'pinia'

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useCounterStore = defineStore('counter', {
    state: () => ({
        cartList:[],
        count:0
      }),
    getters: {
      double: (state) => state.count * 2,
      doubleCountPlusOne:(state)=> state.count*2+1
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })