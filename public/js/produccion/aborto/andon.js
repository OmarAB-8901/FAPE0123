import dataMaintenance from "./tagsAborto.js";
import dataProject from "../../dataProject.js";

dataProject.initCharts('bar');

let intervalTimer;
let timeOfRefresh = 5000;

let tagsToObtainMaintenanceData = dataMaintenance.tags;
let tbodyTable = dataMaintenance.dataTable;

let printTable = () => {

  let body = document.querySelector('.tableAbortKgs tbody');
  let tbody = "";
  tbodyTable.forEach(elem => {

    tbody += `<tr class="${elem.class}">`;
    tbody += `<td class="equipo">${elem.equipo}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td>`;
    tbody += "</tr>";
  });
  body.innerHTML = tbody;
}

// Temporal function
let randomData = () => {

  let data = [];

  for (let i = 0; i < 10; i++) {
    7
    data.push((Math.random() * 800) + 1);
  }

  return data;
};
// END

let obtainData = async () => {

  let colorsChart = ['56, 102, 242', '102, 102, 242', '56, 102, 102'];

  let dataFilters = {
    line: document.querySelector('#lineSelect').value,
    side: document.querySelector('#sideSelect').value,
    searchBy: {
      by: dataProject.obtainBy(),
      init: document.querySelector(`.start${dataProject.obtainBy()}`).value,
      end: document.querySelector(`.end${dataProject.obtainBy()}`).value,
    },
  };

  // let dataConsulted = await fetch(`/maintenance/obtaindatahistory?filters=${JSON.stringify(dataFilters)}`).then(json => json.json()).then(data => data);

  let dataForChart = [];
  switch (dataFilters.line) {
    case '1':
    case '2':
    case '3':
      let data = {
        label: 'Linea ' + dataFilters.line,
        data: randomData(),
        borderColor: 'rgba(56, 102, 242, 0.6)',
        backgroundColor: 'rgba(56, 102, 242, 0.5)',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      }
      dataForChart.push(data);
      break;
    default:
      for (let i = 1; i <= 3; i++) {
        dataForChart.push({
          label: 'Linea ' + i,
          data: randomData(),
          borderColor: `rgba(${colorsChart[i - 1]}, 0.7)`,
          backgroundColor: `rgba(${colorsChart[i - 1]}, 0.5)`,
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        });
      }
  }

  return dataForChart;
}

let initiateChartsProd = async () => {

  let labels = () => { let labels = []; for (let i = 1; i <= 10; i++) { labels.push(`Carril ${i}`); } return labels; };

  // Bar Chart
  dataProject.jsonDataCharts.barChart.type = 'bar';
  dataProject.jsonDataCharts.barChart.enableTitleChart = true;
  dataProject.jsonDataCharts.barChart.titleChart = 'Abortos Linea ' + (document.querySelector('#sideSelect').value).toUpperCase();
  dataProject.jsonDataCharts.barChart.labels = labels();
  dataProject.jsonDataCharts.barChart.dataSet = await obtainData();

  dataProject.printBarChart(dataProject.jsonDataCharts.barChart);

  // Doughnut 
  // dataProject.doughnutCharts.forEach(chart => { chart.destroy(); });
  // dataProject.jsonDataCharts.doughnutChart.totCharts = 5;
  // dataProject.jsonDataCharts.doughnutChart.type = 'doughnut';
  // dataProject.jsonDataCharts.doughnutChart.dataSet = [[90, 10], [90, 10], [90, 10], [90, 10], [90, 10], [90, 10]];
  // dataProject.jsonDataCharts.doughnutChart.namesDoughnutsChart = ['MTTR', 'MTBF', 'MTTF', 'TX x L1', 'Horas Negras'];
  // dataProject.jsonDataCharts.doughnutChart.colorsDoughnutsChart = [['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']];

  // dataProject.printDoughnutChart(dataProject.jsonDataCharts.doughnutChart);
};

let updateChart = async () => {

  // Bar Chart
  // dataProject.jsonDataCharts.barChart.titleChart = 'Abortos Lado ' + (document.querySelector('#sideSelect').value).toUpperCase();
  dataProject.jsonDataCharts.barChart.dataSet = await obtainData();

  dataProject.updateBarChart(dataProject.jsonDataCharts.barChart);

  // Doughnut 
  // dataProject.jsonDataCharts.doughnutChart.totCharts = 5;
  // dataProject.jsonDataCharts.doughnutChart.type = 'doughnut';
  // dataProject.jsonDataCharts.doughnutChart.dataSet = [[80, 20], [70, 30], [50, 50], [40, 60], [20, 80], [80, 20]];
  // dataProject.jsonDataCharts.doughnutChart.namesDoughnutsChart = ['MTTR', 'MTBF', 'MTTF', 'TX x L1', 'Horas Negras'];
  // dataProject.jsonDataCharts.doughnutChart.colorsDoughnutsChart = [['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']];

  // dataProject.updateDoughnutChart(dataProject.jsonDataCharts.doughnutChart);
};

(() => {

  initiateChartsProd();
  printTable();

  intervalTimer = setInterval(() => {
    updateChart();
  }, timeOfRefresh);

  setInterval(() => {

    tagsToObtainMaintenanceData.forEach(async elem => {

      let tagToSend = (elem[0].tag).toString();
      let line = document.querySelector('.lineSelect').value;
      let side = document.querySelector('.sideSelect').value;
      let dataObtained = await fetch(`${dataProject.url}/sbl_tags/readTagData?tag=${tagToSend}&line=${line}&side=${side}`).then(json => json.json());

      document.querySelectorAll(`.${elem[1]} td:not(.equipo)`).forEach((elem, i) => {
        elem.innerText = dataObtained.data[i];
      });

      updateChart();
    });

  // }, timeOfRefresh);
  }, 200000);

  document.querySelector('#lineSelect').addEventListener('change', () => {

    clearInterval(intervalTimer);
    initiateChartsProd();

    intervalTimer = setInterval(() => {
      updateChart();
    }, timeOfRefresh);
  });
  
  document.querySelector('#sideSelect').addEventListener('change', () => {

    clearInterval(intervalTimer);
    initiateChartsProd();

    intervalTimer = setInterval(() => {
      updateChart();
    }, timeOfRefresh);
  });

})();

