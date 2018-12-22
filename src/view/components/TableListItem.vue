<template>
    <div class="table-row">
        <div class="table-td">서울전자 / 청계-다203 (2층)</div>
        <div class="table-td"></div>
        <div class="table-td">
            <b-progress :value="5" :max="10"></b-progress>
            <div class="point">5<span class="max-point">/ 10</span></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.point {
    display: inline-block;
    margin-left: 20px;
}
.max-point {
    opacity: 0.4;
    font-size: 11px;
    margin-left: 5px;
}
.progress {
    width: 86px !important;
    height: 11px !important;
}
</style>


