<template>
    <div id="main" class="window-container">
        <div class="main-container">
            <div class="navbar-container">
                <div class="title" @click="$router.push('/')">숨쉴권리</div>
                <div class="description" @click="popup=true">숨쉴권리 컨소시엄이란?</div>
            </div>
            <div v-if="list" class="table-container">
                <div class="table-header">
                    <div class="table-td">상호명 / 위치</div>
                    <div class="table-td">|</div>
                    <div class="table-td">공기질 지표</div>
                </div>
                <div class="body-scroll">
                    <div class="table-body">
                        <table-list-item v-for="item in item_array" :key="item.id" :item="item" @click.native="clickList(item)"></table-list-item>
                    </div>
                </div>
            </div>
            <detail-list v-else :item="detail_item" @returnList="list=true"></detail-list>
        </div>
        <popup v-if="popup" :item="popup_content" @closePopup="popup=false"></popup>
    </div>
</template>

<script>
import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader'
import OrbitControls from 'three-orbitcontrols'
import DetailList from './components/DetailList'
import TableListItem from './components/TableListItem'
import Popup from './components/Popup'
import json from '../../static/json/index.json'
export default {
    mounted() {
        // this.init()
        // this.onAnimationFrameHandler()
        this.item_array = json.data;
    },
    components: {
        DetailList,
        TableListItem,
        Popup
    },
    data() {
        return {
            list: true,
            scene: '',
            renderer: '',
            camera: '',
            loader: '',
            model: '',
            control: '',
            popup: false,
            popup_content: {
                header: '숨쉴권리 컨소시엄',
                body: '‘숨쉴권리 컨소시엄’은 서울의 도심 전자 제조업 중심지인 세운상가 일대에 입주하고 있는 다양한 분야의 단체들이 기술을 통한 지역과 사회 문제 해결방안 마련을 위해 함께 의기투합하여 활동하는 프로젝트 팀입니다.<br><br>본 컨소시엄에서는 한국과학창의재단과 함께 ‘숨쉴권리:도심제조업지역의 공기의 질 문제 발굴과 해결’이라는 과제를 수행중이며 공기질 현장인식 조사, 메이커스페이스 공기질 측정, 기술워크숍, 시작품 개발 등의 활동을 통해 세운상가 일대 공기의 질 문제에 대하여 함께 고민해보고자 합니다. '
            },
            item_array: [],
            detail_item: ''
        }
    },
    methods: {
        clickList(item){
            this.list = false;
            this.detail_item = item;
            console.log(item);
        },
        init() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera();
            this.renderer = new THREE.WebGLRenderer({antialias: true});
            this.loader = new GLTFLoader();
            this.loaderModel();
            this.initCamera();
            this.initRenderer();
            this.initLight();
            const windowResizeHanlder = () => {
                const { innerHeight, innerWidth } = window;
                this.renderer.setSize(innerWidth, innerHeight);
                this.camera.aspect = innerWidth / innerHeight;
                this.camera.updateProjectionMatrix();
            }
            windowResizeHanlder();
            window.addEventListener('resize', windowResizeHanlder, false);

            document.getElementById("main").appendChild(this.renderer.domElement);
        },
        initCamera() {
            this.camera.position.set(6,3,500);
            this.camera.lookAt(new THREE.Vector3(100,100,0));
            this.controlModel()
        },
        initLight() {
            var light = new THREE.HemisphereLight( 0xbbbbff, 0x444422 );
            light.position.set(0.5, 0, 0.866);
            this.scene.add( light );
        },
        initRenderer() {
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.gammaOutput = true;
            this.renderer.setClearColor(0xefefef, 1);
        },
        loaderModel() {
            const self = this;
            this.loader.load( '/static/model/sewoon.glb', function ( gltf ) {
                self.scene.add( gltf.scene );
            }, undefined, function ( e ) {
                console.error( e );
            } );
        },
        controlModel() {
            this.controls = new OrbitControls( this.camera, this.renderer.domElement );
            // this.controls.target.set( 0, - 0.2, - 0.2 );
            this.controls.target.set( 0, 10, 0 );
            // this.controls.autoRotate = true
            this.controls.update();
        },
        onAnimationFrameHandler() {
            window.requestAnimationFrame(this.onAnimationFrameHandler);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        }
    }
}
</script>

<style scoped>
.window-container {
    position: absolute;
    width: 100%;
    height: 100%;
}
.navbar-container {
    position: absolute;
    z-index: 1000px;
    top: 0px;
    width: 100%;
    height: 60px;
    background: #4b4b4b;
}
.navbar-container .title {
    display: inline-block;
    float: left;
    margin-left: 30px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    font-family: 'InkLipquid';
    color: #09fcdc;
    cursor: pointer;
}
.navbar-container .description {
    display: inline-block;
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 30px;
    color: #09fcdc;
    cursor: pointer;
}
.table-container {
    position: absolute;
    z-index: 1000;
    top: 40px;
    width: 500px;
    height: 91%;
    right: 0;
    margin-top: 40px;
    margin-right: 15px;
    background: #383838;
    border: 1px solid #09fcdc;
}
</style>