<template>
    <div>
    简单运用哈
    <button @click="demo">点击</button>
    <button @click="reset">重置</button>
    <button @click="store.increment">调用action</button>
    <p>{{ store.double }}</p>
    <p>{{ store.doubleCountPlusOne }}</p>
    <p>{{ store.secret }}</p></div>
</template>

<script setup>
import { useCounterStore } from '../store/create'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore();
const demo = ()=>{
    console.log(++store.count);
    // 这实际上并没有替换`$state`
    // store.$state = { count: 24 }
    // 在它内部调用 `$patch()`：
    // store.$patch({ count: 24 })
    // console.log(store.count)

}
const reset = ()=>{
    store.$reset();
    console.log(store.count)
}
// store.increment();
</script>
