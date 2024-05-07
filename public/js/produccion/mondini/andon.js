import dataMaintenance from "./tagsMondini.js";
import dataProject from "../../dataProject.js";

dataProject.initCharts('bar');

let intervalTimer;
let timeOfRefresh = 10000;

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
    data.push( ((Math.random() * 12) + 1).toFixed() );
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

      let auxData = randomData();
      let barBGColor = [];
      let barBDRColor = [];

      auxData.forEach(elem => {

         if(elem > 10){
            barBGColor.push('rgba(49, 230, 0, 0.8)');
            barBDRColor.push('rgba(49, 230, 0, 1)');
         } else if(elem <= 10 && elem > 6){
            barBGColor.push('rgba(228, 235, 1, 0.8)');
            barBDRColor.push('rgba(228, 235, 1, 1)');
         } else if(elem <= 6){
            barBGColor.push('rgba(255, 0, 0, 0.8)');
            barBDRColor.push('rgba(255, 0, 0, 1)');
         }
      });

      let data = {
        label: 'Linea ' + dataFilters.line,
        data: auxData,
        borderColor: barBDRColor,
        backgroundColor: barBGColor,
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
          data: auxData,
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
  dataProject.jsonDataCharts.barChart.titleChart = 'Abortos "lado ' + (document.querySelector('#sideSelect').value).toUpperCase() + '"';
  dataProject.jsonDataCharts.barChart.title_y = true;
  dataProject.jsonDataCharts.barChart.title_y_text = "Ciclos X minuto";
  dataProject.jsonDataCharts.barChart.max_scales = 15;
  dataProject.jsonDataCharts.barChart.labels = labels();
  dataProject.jsonDataCharts.barChart.dataSet = await obtainData();

  dataProject.printBarChart(dataProject.jsonDataCharts.barChart);
};

let updateChart = async () => {

  // Bar Chart
  dataProject.jsonDataCharts.barChart.dataSet = await obtainData();

  dataProject.updateBarChart(dataProject.jsonDataCharts.barChart);
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

