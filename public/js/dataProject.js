
export default {

  url: 'http://127.0.0.1:1880',
  headerApi: {
    push: {},
    put: {},
    delete: {}
  },
  doughnutCharts: [],
  updateDoughnutChart: function (dataUpdateCharts) {

    this.doughnutCharts.forEach((chart, i) => {

      let dataSets = chart.data.datasets;
      dataSets[0].data = dataUpdateCharts.dataSet[i];

      chart.config.options.plugins.titleChart = `${dataUpdateCharts.namesDoughnutsChart[i]} ${dataUpdateCharts.dataSet[i][0]}%`;

      this.doughnutCharts[i].update();
    });
  },
  printDoughnutChart: function (dataSetCharts) {
    /**
     * Doughnut Chart
     */

    if (this.doughnutCharts != [])
      this.doughnutCharts.forEach(chart => { chart.destroy(); })

    let delayed;
    let doughnutSection = "";

    for (let i = 1; i <= dataSetCharts.totCharts; i++) {
      doughnutSection += `<div style="width: 13%;"><canvas id="chartDoughnut_${i}"></canvas></div>`;
    }

    document.querySelector('.doughnutsCharts').innerHTML = doughnutSection;

    for (let i = 1; i <= dataSetCharts.totCharts; i++) {

      let chartDoughnut = document.getElementById('chartDoughnut_' + i).getContext('2d');

      this.doughnutCharts.push(new Chart(chartDoughnut, {
        type: dataSetCharts.type,
        data: {
          datasets: [
            {
              label: ['Dataset 1'],
              data: dataSetCharts.dataSet[i - 1],
              backgroundColor: dataSetCharts.colorsDoughnutsChart[(i - 1)],
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
                delay = context.dataIndex * 400 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            titleChart: `${dataSetCharts.namesDoughnutsChart[i - 1]} ${dataSetCharts.dataSet[i - 1][0]}%`,
            title: {
              display: true,
              text: ctx => ctx.chart.config.options.plugins.titleChart
            }
          }
        },
      }));
      // End
    }
  },
  lineChart: null,
  updateLineChart: function (dataUpdateCharts) {

    let dataSets = this.lineChart.data.datasets;

    dataSets.forEach((dataSet, i) => {
      dataSet.data = dataUpdateCharts.dataSet[i].data;
    });

    this.lineChart.update();
  },
  printLineChart: function (dataSetCharts) {
    /**
     * Line Chart
     */
    if (this.lineChart != null)
      this.lineChart.destroy();

    let delayed;
    let smooth = true;
    let chartLine = document.getElementById('chartLineProduction').getContext('2d');

    this.lineChart = new Chart(chartLine, {
      type: dataSetCharts.type,
      data: {
        labels: dataSetCharts.labels,
        datasets: dataSetCharts.dataSet
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: dataSetCharts.enableTitleChart,
            text: dataSetCharts.titleChart
          }
        },
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
      },
    });
    // End
  },
  barChartJson: null,
  updateBarChart: function (dataUpdateCharts) {

    let dataSets = this.barChartJson.data.datasets;

    dataSets.forEach((dataSet, i) => {
      // dataSet.label = dataUpdateCharts.dataSet[i].label;

      dataSet.backgroundColor = dataUpdateCharts.dataSet[i].backgroundColor;
      dataSet.borderColor = dataUpdateCharts.dataSet[i].borderColor;

      dataSet.data = dataUpdateCharts.dataSet[i].data;
    });

    this.barChartJson.update();
  },
  printBarChart: function (dataSetCharts) {
    /**
     * Bar Chart
     */
    if (this.barChartJson != null)
      this.barChartJson.destroy();

    let barChart = document.getElementById('chartBarProduction').getContext('2d');
    this.barChartJson = new Chart(barChart, {
      type: dataSetCharts.type,
      data: {
        labels: dataSetCharts.labels,
        datasets: dataSetCharts.dataSet
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: dataSetCharts.enableTitleChart,
            text: dataSetCharts.titleChart
          }
        },
        scales: {
          x: {
            title: {
              display: dataSetCharts.title_x,
              text: dataSetCharts.title_x_text
            }
          },
          y: {
            title: {
              display: dataSetCharts.title_y,
              text: dataSetCharts.title_y_text
            },
             grid: {
              color: function(context) {

                if(dataSetCharts.enableLimits){

                    if(context.tick.value == dataSetCharts.valuesLimits[0] || context.tick.value == dataSetCharts.valuesLimits[1])
                        return '#FF0000';
                }

                return '#cecdcd';
              },
            },
            min: dataSetCharts.min_scales,
            max: dataSetCharts.max_scales,
            //  ticks: {
            //   stepSize: 100
            //  }
          }
        }
      }
    });
    // End
  },

  initCharts: function (...charts) {

    charts.forEach(elem => {

      switch (elem) {

        case 'doughnut':
          this.printDoughnutChart(this.jsonDataCharts.doughnutChart);
          break;
        case 'line':
          this.printLineChart(this.jsonDataCharts.lineChart);
          break;
        case 'bar':
          this.printBarChart(this.jsonDataCharts.barChart);
          break;
      }
    });
  },
  jsonDataCharts: {
    lineChart: {
      type: '',
      enableTitleChart: false,
      titleChart: 'none',
      labels: [],
      dataSet: [],
      title_x: false,
      title_x_text: "",
      title_y: false,
      title_y_text: "",
      min_scales: 0,
      max_scales: 1000,
      enableLimits: false,
      valuesLimits: []
    },
    barChart: {
      type: '',
      enableTitleChart: false,
      titleChart: 'none',
      labels: [],
      dataSet: [],
      title_x: false,
      title_x_text: "",
      title_y: false,
      title_y_text: "",
      min_scales: 0,
      max_scales: 1000,
      enableLimits: false,
      valuesLimits: []
    },
    doughnutChart: {
      totCharts: 0,
      type: '',
      enableTitleChart: false,
      titleChart: 'none',
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
