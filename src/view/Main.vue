<template>
    <div id="main" class="window-container">
    </div>
</template>

<script>
import GLTFLoader from './components/three-gltf-loader.js'
export default {
    mounted() {
        this.init()
                    console.log(document.getElementById("main"))

    },
    data() {
        return {
            scene: '',
            renderer: '',
            camera: ''
        }
    },
    methods: {
        init() {
            var width = window.innerWidth;
            var height = window.innerHeight;

            this.renderer = new this.$THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(width, height);

            document.getElementById("main").appendChild(this.renderer.domElement);

            this.scene= new this.$THREE.Scene


            // cube추가
            var cubeGeometry = new this.$THREE.CubeGeometry(100, 100, 100);
            var cubeMaterial = new this.$THREE.MeshLambertMaterial({ color: 0x1ec876});
            var cube = new this.$THREE.Mesh(cubeGeometry, cubeMaterial);

            cube.rotation.y = Math.PI * 45 / 180;

            this.scene.add(cube);

            this.camera = new this.$THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

            this.camera.position.y = 60;
            this.camera.position.z = 800;

            this.scene.add(this.camera);
            this.renderer.setClearColor(0xEEEEEE);
            this.renderer.render(this.scene, this.camera);

            // camera.lookAt(cube.position);

            var skyboxGeometry = new this.$THREE.CubeGeometry(10000, 10000, 10000);
            var skyboxMaterial = new this.$THREE.MeshBasicMaterial({ color: 0xfff, side: this.$THREE.BackSide });
            var skybox = new this.$THREE.Mesh(skyboxGeometry, skyboxMaterial);

            this.scene.add(skybox);

            var pointLight = new this.$THREE.PointLight(0xffffff);
            pointLight.position.set(0, 300, 200);

            this.scene.add(pointLight);
        }
    }
}
</script>

<style scoped>

</style>


