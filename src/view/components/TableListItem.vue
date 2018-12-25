<template>
    <div class="table-row">
        <div class="table-td">{{item.location}}</div>
        <div class="table-td"></div>
        <div class="table-td">
            <b-progress :value="item.air" :max="10"></b-progress>
            <div class="point">{{item.air}}<span class="max-point">/ 10</span></div>
        </div>
    </div>
</template>
<script>
export default {
    props:['item'],
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.table-row {
    z-index: 6000;
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
.progress {
    width: 86px !important;
    height: 11px !important;
}
</style>


