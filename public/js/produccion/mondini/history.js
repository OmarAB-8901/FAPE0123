import dataMaintenance from "./tag7.js";
import dataProject from "../dataProject.js";

dataProject.initCharts();

let tbodyTable = dataMaintenance.dataTable;

let body = document.querySelector('.tableMaintenance tbody');
let tbody = "";
tbodyTable.forEach(elem => {

  tbody += `<tr class="${elem.class}">`;
  tbody += `<td class="nameElem">${elem.equipo}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td>`;
  tbody += "</tr>";
});
body.innerHTML = tbody;

(() => {

  document.querySelector('.btn-search').addEventListener('click', async () => {

    let dataFilters = {
      line: document.querySelector('#lineSelect').value,
      side: document.querySelector('#sideSelect').value,
      searchBy: {
        by: dataProject.obtainBy(),
        init: document.querySelector(`.start${dataProject.obtainBy()}`).value,
        end: document.querySelector(`.end${dataProject.obtainBy()}`).value,
      },
    };

    let dataConsulted = await fetch(`/maintenance/obtaindatahistory?filters=${JSON.stringify(dataFilters)}`);

    let testDataChartLine = [{
      label: 'Disponibiliad',
      data: [-0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5],
      borderColor: 'rgba(56, 102, 242, 0.9)',
      backgroundColor: 'rgba(56, 102, 242, 0.7)',
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 18
    },{
      label: 'Rendimiento',
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      borderColor: 'rgb(255, 102, 132)',
      backgroundColor: 'rgb(255, 102, 132, 0.7)',
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 18
    },{
      label: 'Calidad',
      data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      borderColor: 'rgb(255, 20, 132)',
      backgroundColor: 'rgb(255, 20, 132, 0.7)',
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 18
    },{
      label: 'OEE',
      data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      borderColor: 'rgb(255, 200, 132)',
      backgroundColor: 'rgb(255, 200, 132, 0.7)',
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 18
    }];

    dataProject.doughnutCharts.forEach(chart => { chart.destroy(); });
    dataProject.lineChart.destroy();

    dataProject.jsonDataCharts.lineChart.type = 'line';
    dataProject.jsonDataCharts.lineChart.labels = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    dataProject.jsonDataCharts.lineChart.dataSet = testDataChartLine;
    // Doughnut 
    dataProject.jsonDataCharts.doughnutChart.totCharts = 5;
    dataProject.jsonDataCharts.doughnutChart.type = 'doughnut';
    dataProject.jsonDataCharts.doughnutChart.dataSet = [[90, 10], [90, 10], [90, 10], [90, 10], [90, 10], [90, 10]];
    dataProject.jsonDataCharts.doughnutChart.namesDoughnutsChart = ['MTTR', 'MTBF', 'MTTF', 'TX x L1', 'Horas Negras'];
    dataProject.jsonDataCharts.doughnutChart.colorsDoughnutsChart = [['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']];

    dataProject.printsCharts(dataProject.jsonDataCharts);
  });

})();