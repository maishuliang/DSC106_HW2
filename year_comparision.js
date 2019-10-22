Highcharts.chart('container1', {

    title: {
        text: 'The Total Sales Data from October of the Year to the Sep of Next Year'
    },

    subtitle: {
        text: 'Oct.2016 to Sep.2019'
    },


    yAxis: {
        title: {
            text: 'UCD/month'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    chart: {backgroundColor: 'rgba(255, 255, 255, 0.75)'}, 


    xAxis: {
        categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },

    series: [{
        name: '2016-Oct To 2017-Sep',
        data: [10619003, 10900886, 10498980, 11192197, 11824369, 11437109, 11393492, 11596984, 11878171, 11536662, 12559477, 12225562]
    }, {
        name: '2017-Oct To 2018-Sep',
        data: [11964460,12532702,12836124,13048511,13347771, 12677300, 13251875, 13687830,12840517 ,13338406, 13542320 ,13247269]
    }, {
        name: '2018-Oct To 2019-Sep',
        data: [11374035,12299535,11539095,12558735,12278447,12074324,12250084,12686117,11798203,11547979,11954952,11981653]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});