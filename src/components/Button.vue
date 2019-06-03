<template>
    <button :class="className" @click="onClick">{{ title }}</button>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            require: true
        },
        className: {
            type: String,
            default: 'btn-base'
        },
        onClick: {
            type: Function,
            default: () => {}
        }

    } 
}
</script>
<style>
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
.btn-home-item {
    margin-top: 92%;
    margin-bottom: -2px;
    margin-left: -2px;
    margin-right: -2px;
    background-image: linear-gradient(#fcfff0, #f9e41b);
    width: 103%;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #000;
    box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.45882);
}
</style>

