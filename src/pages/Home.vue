<template>
    <MainLayout>
        <div class="container">
            <Info name="chinmoku47" />
            <div class="row mt-4 mb-4">
                <div class="mx-auto content">
                    好きな動物に投票してね!
                </div>
            </div>
            <div class="row px-5">
                <div class="col-6 mb-4" v-for="(item, key) in images" :key="key">
                    <div class="home-item" :style="{background: `url(${item})`}">
                        <Button class-name="btn-home-item" title="投票する" />
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Button from '../components/Button.vue';
import Info from '../components/Info.vue';

export default {
    components: {
        MainLayout,
        Button,
        Info
    },

    data() {
        return {
            images: [
                require('../assets/images/squirrel.png'),
                require('../assets/images/dog.png'),
                require('../assets/images/fox.png'),
                require('../assets/images/monkey.png'),
                require('../assets/images/litter_cat.png')
            ]
        }
    }
}
</script>

<style scoped>
.container {
    width: 430px;
    height: 948px;
}
.home-item {
    border: 3px solid #000;
    height: 190px;
    padding: 0;
    border-radius: 11px;
    background-position: bottom !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
.content {
    font-size: 1.7rem;
    font-weight: bold;
    color: #feef00;
}
</style>
