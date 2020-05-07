<template>
    <div class="hh" >
        <el-switch v-model="classlist[icon].name"  size="small">
        </el-switch>
    </div>
</template>

<script>
    export default {
        name: "kaiguan",

        props:[
            'icon'
        ],
        data:function () {
            return{
                classlist:{
                    0:{name:true},
                    1:{name:false},
                }
            }
        }
    }
</script>

<style scoped>

</style>