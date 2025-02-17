setTimeout(function () {
    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05', '2025-06',
                    '2025-07',  '2025-08', '2025-09', '2025-10', '2025-11', '2025-12'],
                ['统一账户系统-UCA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1, 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
                ['衡泰债券销售交易系统-HTB', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7, 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
                ['注册登记系统-ZJTA', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5, 25.2, 37.1, 41.2, 18, 33.9, 49.1],
                ['基金公司LOF分TA系统-LOFTA', 25.2, 37.1, 41.2, 18, 33.9, 49.1, 56.5, 82.1, 88.7, 70.1, 53.4, 85.1]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {
                    focus: 'self'
                },
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };
    myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    myChart.setOption(option);
});