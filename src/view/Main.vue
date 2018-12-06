<template>
    <div id="main" class="window-container">
        <div class="input-contaier">
            <span>ssdfd</span>
            <input>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three'
import GLTFLoader from 'three-gltf-loader'
import OrbitControls from 'three-orbitcontrols'
import Dat from "dat.gui";

export default {
    mounted() {
        this.init()
        this.onAnimationFrameHandler()
    },
    data() {
        return {
            scene: '',
            renderer: '',
            camera: '',
            loader: '',
            model: '',
            control: '',
            gui: '',
            camera_position: {
                x: '',
                y: '',
                z: ''
            }
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
            // this.initDatGUI();
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
        // initDatGUI() {
        //     this.gui = new Dat.GUI();
        // },
        initCamera() {
            this.camera.position.set(6,3,500);
            this.camera.lookAt(new THREE.Vector3(0,100,0));
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
            this.controls.autoRotate = true
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
}
.input-container {
    position: absolute;
    z-index: 1000px;
}
.input-container .block {
    margin-bottom: 20px;
    height: 30px;
}
</style>


