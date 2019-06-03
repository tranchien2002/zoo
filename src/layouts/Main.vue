<template>
  <div>
    <slot></slot>
  </div>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.container{
  background: url('https://pbs.twimg.com/media/DwpfF0iXQAEtlwY.jpg') no-repeat center;
  background-size: cover;
  width: 437px;
  height: 778px;
  margin: 0 auto;
  padding: 0;
}
</style>
