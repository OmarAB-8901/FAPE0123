import dataMaintenance from "./tagsMondini.js";
import dataProject from "../dataProject.js";

dataProject.initCharts();

let tbodyTable = dataMaintenance.dataTable;

let body = document.querySelector('.tableMondini tbody');
let tbody = "";
tbodyTable.forEach(elem => {

  tbody += `<tr class="${elem.class}">`;
  tbody += `<td class="nameElem">${elem.event}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td>`;
  tbody += "</tr>";
});
body.innerHTML = tbody;

(() => {

  document.querySelector('.btn-search').addEventListener('click', async () => {

    dataProject.doughnutCharts.forEach(chart => { chart.destroy(); });
    dataProject.lineChart.destroy();

    let dataCharts = {
      lineChart: {
        type: 'line',
        labels: [],
        dataSet: []
      },
      doughnutChart: {
        totCharts: 5,
        // type: 'doughnut',
        type: 'doughnut',
        dataSet: [[90, 1], [90, 5], [90, 1], [90, 9], [90, 9], [90, 9]],
        namesDoughnutsChart: ['MTTR', 'MTBF', 'MTTF', 'TX x L1', 'Horas Negras'],
        colorsDoughnutsChart: [['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']]
      }
    };

    dataProject.printsCharts(dataCharts, true);
  });

})();