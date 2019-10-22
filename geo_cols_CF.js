Highcharts.chart('container4', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    title: {
        text: 'Comparison of Chicken Fillet Sales Data Between Areas & Between 2017-2018 and 2018-2019'
    },
    xAxis: {
        categories: [
            'Fish Fillet-North East',
            'Fish Fillet-South West',
            'Fish Fillet-North West',
            'Fish Fillet-South East',
            'Fish Fillet-Center',
        ],
        crosshair: true
    },

    
    yAxis: {
        min: 0,
        title: {
            text: 'Sales in USD(From Oct to Sep next Year)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Oct.2017-Sep.2018',
        data: [8105702, 7849623, 7834679, 7675296, 7620777]

    }, {
        name: 'Oct.2018-Sep.2019',
        data: [7346033, 7399727, 7125971, 7096365, 7055718]
    }]
});