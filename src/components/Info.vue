<template>
    <div class="row info">
        <div class="col-1"></div>
        <div class="col-4">
            <div class="avatar"></div>
        </div>
        <div class="col-6">
            <div class="name">chinmoku47</div>
            <div class="score d-flex justify-content-between">
                <ScoreLogo />
                <div>999999</div>
            </div>
        </div>
    </div>
</template>
<script>
import ScoreLogo from './ScoreLogo.vue';

export default {
    components: {
        ScoreLogo,
    },

    props: {
        name: {
            type: String,
            require: true
        },
        token: {
            type: Number
        }
    }
}
</script>
<style scoped>
.btn-base {
    background-image: linear-gradient(#fcfff0, #f9e41b);
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 25px;
    border-radius: 10px;
    border: 6px solid #000;
    box-shadow: 0px 5px 0px 0px #00000075;
}
.info {
    padding-top: 50px;
}
.avatar {
    background-image: url('https://theironcaptain.files.wordpress.com/2014/01/daenarys-1024.jpg');
    background-position: center;
    background-size: cover;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    box-shadow: 0px 2px 6px #00000085;
}
.name {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
}
.score {
    border-radius: 32px;
    padding: 7px 20px 7px 10px;
    box-shadow: inset 0px 3px 5px 0px #00000078;
    color: #fff;
    font-weight: bold;
    font-size: 16pt;
    background-color: #79797921;
}
</style>

