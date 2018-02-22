const ColumnChart = function () {
    const container = document.querySelector("#column-chart");
    const chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: container
        },
        title: {
            text: "Our Favourite Programming Languages"
        },
        series: [{
            name: "Cohort 7",
            data: [8, 12, 3, 1]
        }],
        xAxis: {
            categories: ['Javascript', 'Java', 'Ruby', 'Algol']
        }
    });
}