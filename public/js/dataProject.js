
export default {

  url: 'http://127.0.0.1:1880',
  headerApi: {
    push: {},
    put: {},
    delete: {}
  },
  doughnutCharts: [],
  lineChart: null,
  printsCharts: function (dataSetChats) {
    let delayed;
    let smooth = true;
    let chartLine = document.getElementById('chartProduction').getContext('2d');

    this.lineChart = new Chart(chartLine, {
      type: dataSetChats.lineChart.type,
      data: {
        labels: dataSetChats.lineChart.labels,
        datasets: dataSetChats.lineChart.dataSet
      },
      options: {
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 120 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        responsive: true,
        scales: { y: { beginAtZero: true } },
        elements: { line: { tension: smooth ? 0.4 : 0 } }
      }
    });

    let doughnutSection = "";
    for (let i = 1; i <= dataSetChats.doughnutChart.totCharts; i++) {
      doughnutSection += `<div style="width: 13%;"><canvas id="chartDoughnut_${i}"></canvas></div>`;
    }
    document.querySelector('.doughnutsCharts').innerHTML = doughnutSection;

    for (let i = 1; i <= dataSetChats.doughnutChart.totCharts; i++) {

      let chartDoughnut = document.getElementById('chartDoughnut_' + i).getContext('2d');

      this.doughnutCharts.push(new Chart(chartDoughnut, {
        type: dataSetChats.doughnutChart.type,
        data: {
          datasets: [
            {
              label: ['Dataset 1'],
              data: dataSetChats.doughnutChart.dataSet[i - 1],
              backgroundColor: dataSetChats.doughnutChart.colorsDoughnutsChart[(i - 1)],
            }
          ]
        },
        options: {
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 600 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
            title: {
              display: true,
              text: dataSetChats.doughnutChart.namesDoughnutsChart[(i - 1)] + ": " + dataSetChats.doughnutChart.dataSet[(i - 1)][0] + "%"
            }
          }
        },
      }));
    }
  },
  initCharts: function () {
    this.printsCharts(this.jsonDataCharts)
  },
  jsonDataCharts: {
    lineChart: {
      labels: [],
      dataSet: []
    },
    doughnutChart: {
      totCharts: 0,
      type: '',
      dataSet: [],
      namesDoughnutsChart: [],
      colorsDoughnutsChart: []
    }
  },
  obtainBy: function () {

    let dataToReturn = [];

    document.querySelectorAll('.typeSearch .btn.btn-info').forEach(elem => {

      let selected = elem.classList[0];

      switch (selected) {

        case 'searchHours':
          dataToReturn = 'Hour';
          break;

        case 'searchDays':
          dataToReturn = 'Date';
          break;

        default:
          dataToReturn = "Month";
      }
    });

    return dataToReturn;
  }
}