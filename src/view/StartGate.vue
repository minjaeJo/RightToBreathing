<template>
    <div class="window-container">
        <img class="background" src="/static/img/img-bg.png">
        <div class="title-container">
            <div class="sub-title">도심제조업지역 공기 질 문제해결 프로젝트</div>
            <div class="main-title">숨쉴권리</div>
            <b-button variant="green" @click="$router.push('/main')">시작하기</b-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.window-container {
    background: #404040;
}
.background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.43;
}
.title-container {
    position: relative;
    text-align: center;
    padding-top: 35vh;
    color: #03fddd;
    z-index: 1500;
}
.sub-title {
    font-size: 18px;
}
.main-title {
    font-size: 130px;
    font-family: 'InkLipquid';
    margin-bottom: 15px;
}
</style>

