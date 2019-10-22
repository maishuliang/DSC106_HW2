Highcharts.chart('container', {

    title: {
        text: 'Comparison of the Three Categories Between 2017 and 2018'
    },

    subtitle: {
        text: 'Three categories are Hamburger, Chicken Fillet & Fish Fillet'
    },
    style: {filter:'alpha(opacity=10)',opacity:10,background:'transparent'}, 

    data: {
        csv: document.getElementById('csv').innerHTML
    },

    chart: {backgroundColor: 'rgba(255, 255, 255, 0.75)'}, 

    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        lineWidth: 1
    }]
});