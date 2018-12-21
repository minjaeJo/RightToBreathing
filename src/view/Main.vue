<template>
    <div id="main" class="window-container">
        <div class="navbar-container">
            <div class="title">쉼쉴권리</div>
            <div class="description">숨쉴권리 컨소시엄이란?</div>
        </div>
        <div class="table-container">
            <div class="table-header">
                <div class="table-td">상호명 / 위치</div>
                <div class="table-td">|</div>
                <div class="table-td">공기질 지표</div>
            </div>
            <div class="body-scroll">
                <div class="table-body">
                    <div class="table-row" v-for="i in 20" :key="i">
                        <div class="table-td">서울전자 / 청계-다203 (2층)</div>
                        <div class="table-td"></div>
                        <div class="table-td">
                            <b-progress :value="5" :max="10"></b-progress>
                            <div class="point">5<span class="max-point">/ 10</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader'
import OrbitControls from 'three-orbitcontrols'

export default {
    mounted() {
        // this.init()
        // this.onAnimationFrameHandler()
    },
    data() {
        return {
            scene: '',
            renderer: '',
            camera: '',
            loader: '',
            model: '',
            control: ''
        }
    },
    methods: {
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
            // this.renderer.setClearColor(0xcccccc, 1);
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
}
.navbar-container .description {
    display: inline-block;
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 30px;
    color: #09fcdc;
}
.table-container {
    position: absolute;
    z-index: 1000px;
    top: 40px;
    width: 500px;
    height: 90%;
    right: 0;
    margin: 30px;
    background: #383838;
    border: 1px solid #09fcdc
}
.table-td:nth-child(1) {
    padding-left: 28px;
    width: 290px;
}
.table-td:nth-child(2) {
    width: 10px;
}
.table-td:nth-child(3) {
    padding-left: 28px;
    width: 200px;
}
.point {
    display: inline-block;
    margin-left: 20px;
}
.max-point {
    opacity: 0.4;
    font-size: 11px;
    margin-left: 5px;
}
</style>


