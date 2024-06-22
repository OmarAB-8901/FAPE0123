import dataAbort from "./tagsAborto.js";
import dataProject from "../../dataProject.js";

dataProject.initCharts('bar');

let intervalTimer;
let timeOfRefresh = 2000;
let avgKgsAbort = 1.225;

let tagsToObtainAbortData = dataAbort.tags;
let tbodyTable = dataAbort.dataTable;

let addFilterAndonAbort = () => {

    let additionalSection = document.querySelector('.additionalSection');

    let row = document.createElement('div');
    row.classList = 'row';

    let colMD1 = document.createElement('div');
    colMD1.classList = "col-md-6";
    let labelSlctTiempo = document.createElement('label');
    labelSlctTiempo.textContent = "Tiempo de muestra";
    let selectTiempo = document.createElement('select');
    selectTiempo.classList = 'form-select bg-white slctTiempo'
    colMD1.appendChild(labelSlctTiempo);
    colMD1.appendChild(selectTiempo);

    /* let colMD2 = document.createElement('div');
    colMD2.classList = "col-md-6";
    let labelSlctCarril = document.createElement('label');
    labelSlctCarril.textContent = "Seleccione un carril";
    let selectCarril = document.createElement('select');
    selectCarril.classList = 'form-select bg-white slctCarriles';
    colMD2.appendChild(labelSlctCarril);
    colMD2.appendChild(selectCarril); */

    row.appendChild(colMD1);
    // row.appendChild(colMD2);
    additionalSection.appendChild(row);

    // let options = '';
    // for(let i=1; i<=10; i++)
    //     options += `<option value="${i}">Carril ${i}</option>`;

    // document.querySelector('.slctCarriles').innerHTML = options;

    let options = '<option value="segundos">Segundos</option>';
    options += '<option value="Minutos">Minutos</option>';
    // options += '<option value="Hora">Hora</option>';
    document.querySelector('.slctTiempo').innerHTML = options;

    let hr = document.createElement('hr');
    hr.style = "margin: 1rem 0 1rem 0;";

    additionalSection.after(hr);
};

addFilterAndonAbort();

let printTable = () => {

  let body = document.querySelector('.tableAbortKgs tbody');
  let tbody = "";
  tbodyTable.forEach(elem => {

    tbody += `<tr class="${elem.class}">`;
    tbody += `<td class="linea">${elem.line }</td> <td>0</td>`;
    for(let i=0; i<10; i++)
        tbody += "<td>-</td>";
    tbody += "</tr>";
  });
  body.innerHTML = tbody;
}

// Temporal function
let randomData = () => {

  let data = [];

  for (let i = 0; i < 60; i++) {
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

//   let dataConsulted = await fetch(`/maintenance/obtaindatahistory?filters=${JSON.stringify(dataFilters)}`).then(json => json.json()).then(data => data);

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

  let labels = () => { let labels = []; for (let i = 0; i < 60; i++) { labels.push(`${i}`); } return labels; };

  // Bar Chart
  dataProject.jsonDataCharts.barChart.type = 'line';
  dataProject.jsonDataCharts.barChart.enableTitleChart = true;
  dataProject.jsonDataCharts.barChart.titleChart = 'Abortos "lado ' + (document.querySelector('#sideSelect').value).toUpperCase() + '"';
  dataProject.jsonDataCharts.barChart.title_y = true;
  dataProject.jsonDataCharts.barChart.title_y_text = "Kilogramos";
  dataProject.jsonDataCharts.barChart.max_scales = 1000;
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

    tagsToObtainAbortData.forEach(async elem => {

      let tagToSend = (elem[0].tag).toString();
    //   let line = document.querySelector('.lineSelect').value;
    //   let side = document.querySelector('.sideSelect').value;
    //   let dataObtained = await fetch(`${dataProject.url}/sbl_tags/readTagData?tag=${tagToSend}&line=${line}&side=${side}`).then(json => json.json());

    let dataObtained = await fetch(`${dataProject.url}/sbl_tags/readTagData?tag=${tagToSend}`).then(json => json.json());

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

