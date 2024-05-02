import dataMaintenance from "./tagsQuality.js";
import dataProject from "../dataProject.js";

dataProject.initCharts();

let tbodyTable = dataMaintenance.dataTable;

let body = document.querySelector('.tableQuality tbody');
let tbody = "";
tbodyTable.forEach(elem => {

  tbody += `<tr class="${elem.class}">`;
  tbody += `<td class="event">${elem.event}</td> <td>${elem.tipo_dato}</td> <td>${elem.valor_referencia}</td> <td>-</td> <td>${elem.plc}</td>`;
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
  
      let sectionLabelGraph = ['MTTR', 'MTBF', 'MTTF', 'TX x L', 'Horas negras'];
      let colorGraph = ['56, 102, 242', '255, 122, 132', '255, 20, 132', '255, 200, 132', '200, 100, 132'];
      let labelsGraph = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
      let dataGraph = [1, 1, 1, 1, 1, 0.3, 1, 1, 1, 1, 1, 1];
      let testDataChartLine = [];

      for(let i=0; i<sectionLabelGraph.length; i++){

        let sectionGraph = {
          label: sectionLabelGraph[i],
          data: dataGraph,
          borderColor: `rgba(${colorGraph[i]}, 1)`,
          backgroundColor: `rgba(${colorGraph[i]}, 0.7)`,
          fill: false,
          pointRadius: 4,
          pointHoverRadius: 18
        }

        testDataChartLine.push(sectionGraph);
      }

      dataProject.doughnutCharts.forEach(chart => { chart.destroy(); });
      dataProject.lineChart.destroy();

      dataProject.jsonDataCharts.lineChart.type = 'line';
      dataProject.jsonDataCharts.lineChart.labels = labelsGraph;
      dataProject.jsonDataCharts.lineChart.dataSet = testDataChartLine;
      // Doughnut 
      dataProject.jsonDataCharts.doughnutChart.totCharts = 5;
      dataProject.jsonDataCharts.doughnutChart.type = 'doughnut';
      dataProject.jsonDataCharts.doughnutChart.dataSet = [[95, 5], [95, 5], [95, 5], [95, 5], [95, 5], [95, 5]];
      dataProject.jsonDataCharts.doughnutChart.namesDoughnutsChart = ['MTTR', 'MTBF', 'MTTF', 'TX x L1', 'Horas Negras'];
      dataProject.jsonDataCharts.doughnutChart.colorsDoughnutsChart = [['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'], ['rgb(54, 162, 235)', 'rgb(255, 99, 132)']];

      dataProject.printsCharts(dataProject.jsonDataCharts);
  });

})();