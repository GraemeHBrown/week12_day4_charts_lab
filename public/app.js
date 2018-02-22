

const app = function () {
    //Title setup
    const title = document.querySelector('h1');
    title.innerHTML = 'Charts Page!';

    //API call
    const countryDataArray = [];
    const url = 'https://restcountries.eu/rest/v2/all';
    // makeRequest(url, requestComplete);

    //Container creation
    const container = document.querySelector('#pie-chart');

    const dataObject = {
        chart: {
            type: 'pie',
            renderTo: container
        },
        title: {
            text: "The Pokemon Types Ive Caught"

        },
        series: [
            {
                name: 'Type',
                data: [
                    {
                        name: "Fire",
                        y: 74

                    },
                    {
                        name: "Water",
                        y: 25,
                        color: "#73b7ff",
                        sliced: true
                    },
                    {
                        name: "Grass",
                        y: 1,
                        color: "#00ba2f"
                    }
                ]

            }
        ]
    }

    new PieChart(dataObject);
    new ColumnChart();

}


const makeRequest = function(url, callback){
    const request = new XMLHttpRequest();
    request.open('GET',url);
    request.addEventListener('load', callback);
    request.send();
};

const requestComplete = function(){
    if(this.status !== 200) return;
    const jsonString = this.responseText;
    const countries = JSON.parse(jsonString);
    populateArray(countries);
};

document.addEventListener('DOMContentLoaded', app);

