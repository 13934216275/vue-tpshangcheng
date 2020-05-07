<template>
    <ve-line :data="chartData" :tooltip="{type:''}"></ve-line>
</template>

<script>
    export default {
        data () {
            this.chartSettings = {
                metrics: ['销售金额'],
                dimension: ['日期']
            }
            return {
                chartData: {
                    columns: ['日期', '销售金额'],
                    rows: [
                        { '日期': '1/1', '销售金额': 1393, '下单率': 0.32 },
                        { '日期': '1/2', '销售金额': 3530,  '下单率': 0.26 },
                        { '日期': '1/3', '销售金额': 2923, '下单率': 0.76 },
                        { '日期': '1/4', '销售金额': 1723, '下单率': 0.49 },
                        { '日期': '1/5', '销售金额': 3792,'下单率': 0.323 },
                        { '日期': '1/6', '销售金额': 4593, '下单率': 0.78 }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>