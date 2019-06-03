<template>
    <MainLayout>
        <div class="container">
            <Info name="chinmoku47" />
            <div class="row mt-4 mb-4">
                <div class="mx-auto content">
                    好きな動物に投票してね!
                </div>
            </div>
            <div class="col-12" style="padding: 0 26px">
                <div
                    v-for="(item, key) in items"
                    :key="key"
                    class="item mb-4"
                    :style="{background: `url(${ require('../assets/images/bg1.png') })`}"
                >
                    <div class="rank-badge" :class="[`badge${item.rank}`]">{{ item.rank }}</div>
                    <div class="row item-inner">
                        <div class="col-3 py-2 mr-1">
                            <div class="item-image" :style="{background: `url(${item.cover})`}">

                            </div>
                        </div>
                        <div class="col-8 py-2 score">
                            <div class="animal">
                                {{ item.text }}
                            </div>
                            <div class="score d-flex">
                                <ScoreLogo />
                                <div class="ml-2">{{ item.score }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
<script>
import MainLayout from '../layouts/Main.vue';
import Button from '../components/Button.vue';
import Info from '../components/Info.vue';
import ScoreLogo from '../components/ScoreLogo.vue';

export default {
    components: {
        MainLayout,
        Button,
        Info,
        ScoreLogo
    },

    data() {
        return {
            items: [
                {
                    text: 'りす',
                    cover: require('../assets/images/squirrel.png'),
                    score: 999999,
                    rank: 1
                },
                {
                    text: 'いぬ',
                    cover: require('../assets/images/dog.png'),
                    score: 150,
                    rank: 2
                },
                {
                    text: 'ワオキツネザル',
                    cover: require('../assets/images/fox.png'),
                    score: 10,
                    rank: 3
                },
                {
                    text: 'ニホンザル',
                    cover: require('../assets/images/monkey.png'),
                    score: 2,
                    rank: 4
                },
                {
                    text: 'ねこ',
                    cover: require('../assets/images/litter_cat.png'),
                    score: 1,
                    rank: 5
                },
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
.content {
    font-size: 1.7rem;
    font-weight: bold;
    color: #feef00;
}
.item {
    padding: 3px;
    box-shadow: 0 3px #00000063;
    position: relative;
}
.item-inner {
    margin: 1px;
    box-shadow: inset 0 2px 3px #00000066;
}
.item-image {
    height: 80px;
    width: 80px;
    background: url(/_nuxt/assets/images/squirrel.png);
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border: 2px solid #000;
    border-radius: 9px;
}
.animal {
    font-size: 1.8rem;
    font-weight: bold;
    color: #000;
}
.score {
    color: #543724;
    font-weight: bold;
    font-size: 16pt;
}
.rank-badge {
    text-align: center;
    padding: initial;
    font-weight: bold;
    font-size: 16pt;
    height: 35px;
    width: 35px;
    border-radius: 50px;
    position: absolute;
    top: -13px;
    left: -15px;
    z-index: 10;
    box-shadow: 1px 3px 5px -2px #000000db;
}
.badge1 {
    border: 2px solid #ded72a;
    background-image: linear-gradient(#fff914, #fffbb9);
    color: #b3a700;
}
.badge2 {
    border: 2px solid #979797;
    background-image: linear-gradient(#b0b1b0, #d2d2d2);
    color: #6f6f6f;
}
.badge3 {
    border: 2px solid #e0d15d;
    background-image: linear-gradient(#e3dc78, #e8e185);
    color: #a89931;
}
.badge4 {
    border: 2px solid #fff;
    background: #fff;
    color: #5e3d29;
}
.badge5 {
    border: 2px solid #fff;
    background: #fff;
    color: #5e3d29;
}
</style>
