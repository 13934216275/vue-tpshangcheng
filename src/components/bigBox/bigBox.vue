<template>
    <div class="bigBox">
        <div class="one" :style="bgcolor">
            <img :src="http" alt="">
            <div class="desc">
                <div class="tit">{{tit}}</div>
                <span>{{span}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:["http","tit","span","bgcolor"]
    }
</script>
<style>
    .one{
        width: 387px;
        height: 195px;
        /*background: #32cc7f;*/
        margin-right: 16px;
        margin-bottom: 10px;
        padding: 83px 0 38px 38px;
        box-sizing: border-box;
        float: left;
        border-radius: 5px;
    }
    .one img{
        width: 71px;
        height: 74px;
    }
    .desc{
        float: right;
        margin-right: 20px;
    }
    .tit{
        font-size: 30px;
        color: #fff;
    }
    .desc span{
        margin-top: 5px;
        font-size: 14px;
        color: #fff;
    }
</style>
