<template>
    <div class="window-container">
        <!-- <img class="background" src="/static/img/img-bg.png"> -->
        <div class="title-container">
            <div class="sub-title">도심제조업지역 공기 질 문제해결 프로젝트</div>
            <div class="main-title">숨쉴권리</div>
            <b-button variant="green" @click="$router.push('/main')">시작하기</b-button>
            <div class="description" @click="popup=true">숨쉴권리 컨소시엄이란?</div>
        </div>
        <popup v-if="popup" :item="popup_content" @closePopup="popup=false"></popup>
    </div>
</template>

<script>
import Popup from './components/Popup'
export default {
    components: {
        Popup
    },
    data() {
        return {
            popup: false,
            popup_content: {
                header: '숨쉴권리 컨소시엄',
                body: '‘숨쉴권리 컨소시엄’은 서울의 도심 전자 제조업 중심지인 세운상가 일대에 입주하고 있는 다양한 분야의 단체들이 기술을 통한 지역과 사회 문제 해결방안 마련을 위해 함께 의기투합하여 활동하는 프로젝트 팀입니다.<br><br>본 컨소시엄에서는 한국과학창의재단과 함께 ‘숨쉴권리:도심제조업지역의 공기의 질 문제 발굴과 해결’이라는 과제를 수행중이며 공기질 현장인식 조사, 메이커스페이스 공기질 측정, 기술워크숍, 시작품 개발 등의 활동을 통해 세운상가 일대 공기의 질 문제에 대하여 함께 고민해보고자 합니다. '
            }
        }
    }
}
</script>

<style scoped>
.window-container {
    background: #050F10;
    background-image: url(/static/img/img-bg.png);
    background-position: center top;
    background-size: cover;
}
.title-container {
    position: relative;
    text-align: center;
    padding-top: 30vh;
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
.description {
    cursor: pointer;
    margin-top: 15px;
}
</style>

