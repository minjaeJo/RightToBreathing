<template>
    <div class="detail-container">
        <div class="body-scroll">
            <div class="return-list" @click="page='list'">
                <img class="return-img" src="/static/img/icon-goback.png">
                <span>리스트로 돌아가기</span>
            </div>
            <div class="picture-content">
                <div class="title">서울전자/청계-다203(2층)</div>
                <div class="image">
                    <img src="/static/img/11.김광웅_2.png">
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
                            <span class="main-point">5</span>
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
                            <div>10평</div>
                        </div>
                        <div class="space-text">
                            <div class="name">상주인원</div>
                            <div>3명</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-content">
                <div class="qna-list">
                    <div class="question">
                        Q. 현재 활동하시는 사무실에서 주로 하시는 작업은 어떤 작업이신지요?
                    </div>
                    <div class="answer">
                        A. 물건 수리 주문받고, 수리하러 오시는 손님들을 맞이하며, 전화 상담 업무를 하고 있다.
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 작업과정 전반에서 본인의 건강과 신체에 가장 나쁜 영향을 미치고 있다고 생각되는 것은 어떤 작업인가요?
                    </div>
                    <div class="answer">
                        A. 작업 자체가 신체에 좋은 영향을 미치지 못한다. 오래된 물건들이 많아 먼지가 많아서 수리를 하게 되면 먼지를 마시게 된다. 그래서 답답함이 느껴진다.
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 현재 본인이 갖고 있는 환경적 문제를 해결하는데 있어서 필요한 것은 어떤 것이라고 생각하시나요?
                    </div>
                    <div class="answer">
                        A. 유리에 환기시설물을 설치했으면 좋겠다. 현재 창문이 하나도 없어서 너무 답답하다. 창문이라도 설치해서 공기가 통하는 길이 생겼으면 좋겠다.
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 현재 근무하시는 주변지역의 공기와 관련한 환경은 어떻다고 생각하시나요? 나쁘다고 생각한다면 특히 어떤 부분이 나쁘다고 생각하시나요?
                    </div>
                    <div class="answer">
                        A. 주변공기가 나쁘니까, 작업장도 배로 나빠지는 것 같다. 위, 아래, 옆 주차장, 옆 상가에서 나오는 매연, 분진이나 큰 먼지들이 다 들어오고 있다. 지금 가장 취약한 위치에 작업장이 위치한 것 같다.
                    </div>
                </div>
                <div class="qna-list">
                    <div class="question">
                        Q. 환경을 개선하기 위한 아이디어나 제안 사항이 있으신가요?
                    </div>
                    <div class="answer">
                        A. 아이디어라기보다는, 청계상가 동측이 많이 지저분하다. 분진이 많이 날리고, 용접할 때 날리는 가스에 피곤할 때가 있다. 을지로 인쇄골목쪽도 화학유해물질이 많이 발생한다. 이 부근의 환경을 좀 더 신경 써서 개선시켰으면 하는 바람이 있다.
                    </div>
                </div>
            </div>
        </div>
        <popup v-if="popup==true" :item="popup_content" @closePopup="popup=false"></popup>
    </div>
</template>
<script>
import Popup from '../components/Popup'
export default {
    components: {
        Popup
    },
    data() {
        return {
            popup: false,
            popup_content: {
                header: '공기질 지표는 어떻게 측정되나요?',
                body: '‘숨쉴권리 컨소시엄’은 서울의 종로와 중구에 걸쳐 조성된 조명, 음향, 영상 기기 등 도심 전자 제조업 중심의 세운상가에 입주하고 있는 로봇, 드론, 빅데이터, 전자수리, 발명, 기술교육, 커뮤니티디자인 등 다양한 분야의 단체들이 생활공간의 공기질 개선, 여성을 위한 적정기술 보급 등 ‘기술을 통한 지역과 사회 문제의 해결을 위해 함께 활동하는 프로젝트 팀’입니다.'
            }
        }
    }
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
.picture-content .image img {
    width: 100%;
    height: 100%;
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
    height: 800px;
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
</style>


