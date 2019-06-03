<template>
    <MainLayout>
        <div class="container">
            <div class="row logo">
                <img src="../assets/images/logo.png" />
            </div>
            <div class="row">
                <a href="http://localhost:4000/auth/twitter" class="btn-base">Twitter でログイン</a>
            </div>
        </div>
    </MainLayout>
</template>

<script>
import axios from 'axios';
import MainLayout from '../layouts/Main.vue';
import Button from '../components/Button.vue';

export default {
    components: {
        Button,
        MainLayout
    }   
}
</script>

<style scoped>    
    .logo{
        padding-top: 160px;
    }
    .logo img{
        width: 85%;
        height: 85%;
        margin: 0 auto;
    }
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
</style>
