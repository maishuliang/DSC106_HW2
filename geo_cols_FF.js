Highcharts.chart('container3', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    title: {
        text: 'Comparison of Fish Fillet Sales Data Between Areas & Between 2017-2018 and 2018-2019'
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
        data: [4863725,4769802,4686079,4605964,4584584]

    }, {
        name: 'Oct.2018-Sep.2019',
        data: [4466029,4383528,4305453,4285526,4217245]
    }]
});