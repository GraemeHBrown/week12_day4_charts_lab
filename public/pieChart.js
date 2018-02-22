const PieChart = function (dataObject) {
    // this.titleText = titleText;
    this.dataObject = dataObject;
    // console.log('Data array:',this.dataArray);
    const container = document.querySelector('#pie-chart');
    const chart = new Highcharts.Chart(
        this.dataObject
    );
}


