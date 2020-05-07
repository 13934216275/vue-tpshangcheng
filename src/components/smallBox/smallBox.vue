<template>
    <div class="smallBox">
        <div class="two">
            <i class="ice ice_w"></i>
            <span>{{span}}</span>
            <h6>{{h6}}</h6>
        </div>
    </div>
</template>
<script>
    export default{
        props:["span","h6"]
    }
</script>
<style>
    .two{
        width: 254px;
        height: 223px;
        background: #f5f5f5;
        padding: 50px 0;
        border-radius: 5px;
        text-align: center;
        box-sizing: border-box;
    }
    .two i{
        /*background: url('http://121.42.234.123:8080/public/static/images/admin-icon.png') no-repeat;*/
        /*background-position: 0 -214px;*/
    }
    .ice{
        display: block;
        width: 55px;
        height: 55px;
        margin-left: 100px;
        margin-bottom: 18px;
    }
    .two span{
        font-size: 14px;
        line-height: 18px;
    }
    .two h6{
        font-size: 18px;
        color: #ec5151;
        display: block;
        margin-top: 8px;
    }
</style>
