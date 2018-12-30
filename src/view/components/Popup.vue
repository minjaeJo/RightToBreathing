<template>
    <div class="popup-container">
        <div class="popup" @click="closePopup">
            <div class="popup-header">
                <img class="close" src="/static/img/icon-close.png">
                <div class="title">{{item.header}}</div>
            </div>
            <div class="popup-body" v-html="item.body"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['item'],
    methods: {
        closePopup(event){
            if($(event.target).hasClass("popup") || $(event.target).hasClass("popup-close")  || $(event.target).hasClass("close") )
                this.$emit('closePopup');
        }
    },
}
</script>
<style>
.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
    z-index: 9900;
    text-align: -webkit-center;
    padding-top: 190px;
}
.popup {
    position: relative;
    width: 660px;
    height: 500px;
    background: #000;
    padding: 100px;
    color: #09fcdc;border: 1px solid #09fcdc;
}
.popup-header {
    width: 100%;
    height: 60px;
}
.popup-header .title{
    font-size: 24px;
    font-family: 'noto-bold';
}
.popup-body {
    width: 445px;
    font-size: 16px;
    font-family: 'noto-light';
    text-align: left;
    line-height: 1.75;
    word-break: break-all;
    text-align: justify;
}
.close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    opacity: 1.0;

}
</style>