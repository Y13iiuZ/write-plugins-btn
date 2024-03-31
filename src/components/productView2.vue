<template>
    <div>
        <h2>产品二号</h2>
        <div>{{ $route.params.use }}</div>
    </div>
</template>

<script>
export default {
    created(){
    console.log(this.$route.params);
    }
}
</script>