<template>
    <div class="flex flex-col min-h-screen">
        <Header></Header>
        <Aside></Aside>
        <Nuxt />
        <Footer></Footer>
    </div>
</template>

<script>
import {initDropdowns} from 'flowbite';
import Header from './partials/header';
import Aside from './partials/aside';
import Footer from './partials/footer.vue';
export default {
    name: 'AuthLayout',
    components: {
        Aside, Header, Footer
    },
    mounted() {
        initDropdowns();
    }
}
</script>
