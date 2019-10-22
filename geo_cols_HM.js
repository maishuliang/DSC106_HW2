Highcharts.chart('container2', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    title: {
        text: 'Comparisons of Hamburger Sales Data Between Areas & Between 2017-2018 and 2018-2019'
    },
    xAxis: {
        categories: [
            'Hamburger-North East',
            'Hamburger-South West',
            'Hamburger-North West',
            'Hamburger-South East',
            'Hamburger-Center',
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
        data: [19254223, 19022733,18864164,18421466, 18156268]

    }, {
        name: 'Oct.2018-Sep.2019',
        data: [17975759, 17450741, 17393061, 16916414, 16925589]
    }]
});