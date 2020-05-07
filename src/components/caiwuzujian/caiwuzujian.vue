<template>
    <div class="cwbox">
        <div class="qianb" >
            <p>{{titles}}</p>
            <span>{{nums}}</span>
        </div>
    </div>
</template>
<script>
    export default{
        props:["urls","titles","nums"]
    }

</script>
<style scope>
    .qianb{
        width:170px;
        height:80px;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562328147748&di=e507748d5e02e962d2282002bb6ab575&imgtype=0&src=http%3A%2F%2Fpic37.nipic.com%2F20140102%2F12103097_170607474156_2.jpg");
        background-size: 100px;
    }
    .qianb p{
        color: #fff;
        font-size: 18px;
    }
    .qianb span{
        color: #fff;

        font-size: 18px;
    }
</style>