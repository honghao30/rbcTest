<template>
    <div class="wrap">
        <DefaultHeader />
        <div class="contents" id="contents">
            <router-view />
        </div>
        <DefaultFooter />
    </div>
</template>

<script>

import DefaultHeader from './DefaultHeader.vue'
import DefaultFooter from './DefaultFooter.vue'

export default {
    name: 'DefaultLayout',
    components: {
        DefaultHeader,
        DefaultFooter
    }
}
</script>

<style>

</style>