<template>
    <div class="detail-container">
        <div class="body-scroll">
            <div class="return-list" @click="returnList">
                <img class="return-img" src="/static/img/icon-goback.png">
                <span>리스트로 돌아가기</span>
            </div>
            <div class="picture-content">
                <div class="title">{{item.location}}</div>
                <div class="image">
                    <img class="box-photo" :src="item.main_photo">
                    <div class="pano-icon" @click="openPano(item.photo_360)">
                        <span>360도 공간 사진 보기</span>
                        <img src="/static/img/icon-camera.png">
                    </div>
                </div>
            </div>
            <div class="info-content">
                <div class="air">
                    <div class="title">
                        <span>공기질 지표</span>
                        <img class="question-img" src="/static/img/icon-question.png" @click="popup=true">
                    </div>
                    <div class="description">
                        <div class="point">
                            <span class="main-point">{{item.air}}</span>
                            <span class="max-point">/ 10</span>
                        </div>
                        <b-progress :value="5" :max="10"></b-progress>
                    </div>
                </div>
                <div class="space">
                    <div class="title">
                        <span>공간 면적</span>
                    </div>
                    <div class="description">
                        <div class="space-text" style="margin-right: 40px">
                            <div class="name">면적</div>
                            <div>{{item.space}}평</div>
                        </div>
                        <div class="space-text">
                            <div class="name">상주인원</div>
                            <div>{{item.person}}명</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-content">
                <div class="qna-list">
                    <div class="question">
                        Q. 현재 활동하시는 사무실의 규모는 어느 정도인가요?
                    </div>
                    <div class="answer">
                        A. {{item.question_1}}
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                       Q. 현재 활동하시는 사무실에서 주로 하시는 작업은 어떤 작업이신지요?
                    </div>
                    <div class="answer">
                        A. {{item.question_2}}
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 작업과정 전반에서 본인의 건강과 신체에 가장 나쁜 영향을 미치고 있다고 생각되는 것은 어떤 작업인가요?
                    </div>
                    <div class="answer">
                        A. {{item.question_3}}
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 공기질 개선을 위해 주기적으로 하시는 활동이 있으신가요?
                    </div>
                    <div class="answer">
                       A. {{item.question_4}}
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 주기적으로 하시는 공기질 개선 활동이 있으시다면 일주, 혹은 하루에 몇 번 몇 시간씩 하시나요?
                    </div>
                    <div class="answer">
                        A. {{item.question_5}}
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 현재 본인이 갖고 있는 환경적 문제를 해결하는데 있어서 필요한 것은 어떤 것이라고 생각하시나요?
                    </div>
                    <div class="answer">
                        A. {{item.question_6}}
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 환경을 개선하기 위한 아이디어나 제안 사항이 있으신가요?
                    </div>
                    <div class="answer">
                        A. {{item.question_7}}
                    </div>
                </div>
            </div>
        </div>
        <popup v-if="popup==true" :item="popup_content" @closePopup="popup=false"></popup>
        <div v-if="pano==true" class="pano-container">
            <pano title="" width="100%" height="100%" :bundle="photo_360" format="jpg" style="position: initial;"></pano>
            <img class="guide-360" src="/static/img/guide-360.png">
            <img class="guide-close" src="/static/img/icon-close.png" @click="pano=false">
        </div>
    </div>
</template>
<script>
import Popup from '../components/Popup'
import Pano from 'vue-pano'
export default {
    props:['item'],
    components: {
        Popup,
        Pano
    },
    data() {
        return {
            pano: false,
            popup: false,
            popup_content: {
                header: '공기질 지표는 어떻게 측정되나요?',
                body: '‘숨쉴권리 컨소시엄’은 서울의 종로와 중구에 걸쳐 조성된 조명, 음향, 영상 기기 등 도심 전자 제조업 중심의 세운상가에 입주하고 있는 로봇, 드론, 빅데이터, 전자수리, 발명, 기술교육, 커뮤니티디자인 등 다양한 분야의 단체들이 생활공간의 공기질 개선, 여성을 위한 적정기술 보급 등 ‘기술을 통한 지역과 사회 문제의 해결을 위해 함께 활동하는 프로젝트 팀’입니다.'
            },
            photo_360: ''
        }
    },
    methods: {
        openPano(src) {
            this.pano = true;
            this.photo_360 = src;
        },
        returnList() {
            this.$emit('returnList')
        }
    },
}
</script>
<style scoped>
.detail-container {
    position: absolute;
    z-index: 1000;
    top: 40px;
    width: 500px;
    height: 90%;
    right: 0;
    margin-top: 30px;
    margin-right: 15px;
}
.pano-container {
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
.picture-content {
    width: 100%;
    height: 393px;
    margin-bottom: 20px;
}
.picture-content .title,
.info-content .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-family: 'noto-bold';
    color: #09fcdc;
    background: #2d5d57;
}
.picture-content .image {
    position: relative;
    width: 100%;
    height: 350px;
}
.picture-content .box-photo {
    width: 100%;
    height: 100%;
}
.picture-content .pano-icon {
    position: absolute;
    bottom: 21px;
    right: 17px;
    cursor: pointer;
}
.picture-content .pano-icon span {
    color: #09fcdc;
    font-size: 14px;
    font-family: 'noto-light';
    vertical-align: middle;
}
.picture-content .pano-icon img {
    width: 34px;
}
.info-content {
    display: inline-flex;
    width: 100%;
    height: 160px;
    margin-bottom: 10px;
}
.info-content .air {
    position: relative;
    display: inline-block;
    width: 200px;
    margin-right: 10px;
}
.info-content .space {
    position: relative;
    display: inline-block;
    width: 290px
}
.info-content .title {
    font-size: 14px;
}
.info-content .description {
    width: 100%;
    height: 110px;
    background: #414141;
    text-align: center;
    padding-top: 25px;
}
.detail-content {
    width: 100%;
    color: #09fcdc;
    background: #414141;
    padding: 40px 30px;
}
.return-list {
    color: #000;
    font-size: 14px;
    font-family: 'noto-medium';
    margin: 20px 10px;
}
.return-list span {
    vertical-align: middle;
}
.return-img {
    width: 19px;
    height: 18px;
}
.question-img {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 17px;
    cursor: pointer;
}
.progress {
    width: 104px !important;
    height: 7px !important;
}
.point {
    height: 30px;
    line-height: 30px;
    color:#09fcdc;
}
.main-point {
    font-size: 30px;
}
.max-point {
    opacity: 0.4;
    font-size: 18px;
    margin-left: 5px;
    vertical-align: top;
}
.space-text {
    display: inline-block;
    color:#09fcdc;
    font-size: 24px;
    font-family: 'noto-bold';
}
.space-text .name {
    font-family: 'noto-light';
    font-size: 14px;
}
.qna-list {
    font-size: 14px;
    margin-bottom: 50px;
}
.qna-list .question {
    color: #09fcdc;
    margin-bottom: 20px;
}
.qna-list .answer {
    color: #2a9b8c;
}
.guide-360 {
    position: absolute;
    left: 40vw;
    top: 40vh;
    width: 275px;
    height: 150px;
}
.guide-close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    cursor: pointer;
}
</style>


