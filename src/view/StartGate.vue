<template>
    <div class="window-container">
        <div class="title-container">
            <div class="sub-title">도심제조업지역 공기 질 문제해결 프로젝트</div>
            <div class="main-title">숨쉴권리</div>
            <b-button variant="green">
                <router-link :to="{ name: 'Main' }">시작하기</router-link>
            </b-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title-container {
    text-align: center;
    padding-top: 35vh;
    color: #03fddd;
}
.sub-title {
    font-size: 13px;
}
.main-title {
    font-size: 100px;
    font-family: 'InkLipquid';
    margin-bottom: 15px;
}
</style>

