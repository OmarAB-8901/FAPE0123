import dataAbort from "./tagsAborto.js";
import dataNodeRedServer from "../../dataProject.js";

dataNodeRedServer.initCharts('bar');

let intervalTimer;
let timeOfRefresh = 20;
let avgKgsAbortPerSecond = 20.750;

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

  let options = '<option value="minutos">Minutos</option>';
  options += '<option value="segundos">Segundos</option>';
  // options += '<option value="Hora">Hora</option>';
  document.querySelector('.slctTiempo').innerHTML = options;

  let hr = document.createElement('hr');
  hr.style = "margin: 1rem 0 1rem 0;";

  additionalSection.after(hr);
};

let printTable = () => {

  let body = document.querySelector('.tableAbortKgs tbody');
  let tbody = "";
  tbodyTable.forEach((elem, i) => {

    tbody += `<tr class="${elem.class}">`;
    tbody += `<td class="linea">${elem.line}</td> <td class="totalKgs">0.000</td>`;
    for (let j = 0; j < 10; j++)
      tbody += `<td class="${elem.class}_sensor_${(j + 1)}">0.000</td>`;
    tbody += "</tr>";
  });
  body.innerHTML = tbody;
}

// Temporal function
let randomData = () => {

  let data = [];

  for (let i = 0; i < 60; i++) {
    // data.push((Math.random() * 800) + 1);
    data.push(600);
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
      by: dataNodeRedServer.obtainBy(),
      init: document.querySelector(`.start${dataNodeRedServer.obtainBy()}`).value,
      end: document.querySelector(`.end${dataNodeRedServer.obtainBy()}`).value,
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
  dataNodeRedServer.jsonDataCharts.barChart.type = 'line';
  dataNodeRedServer.jsonDataCharts.barChart.enableTitleChart = true;
  dataNodeRedServer.jsonDataCharts.barChart.titleChart = 'Abortos "lado ' + (document.querySelector('#sideSelect').value).toUpperCase() + '"';
  dataNodeRedServer.jsonDataCharts.barChart.title_y = true;
  dataNodeRedServer.jsonDataCharts.barChart.title_y_text = "Kilogramos";
  dataNodeRedServer.jsonDataCharts.barChart.max_scales = 1000;
  dataNodeRedServer.jsonDataCharts.barChart.labels = labels();
  dataNodeRedServer.jsonDataCharts.barChart.dataSet = await obtainData();

  dataNodeRedServer.printBarChart(dataNodeRedServer.jsonDataCharts.barChart);
};

let updateChart = async () => {

  // Bar Chart
  dataNodeRedServer.jsonDataCharts.barChart.dataSet = await obtainData();

  dataNodeRedServer.updateBarChart(dataNodeRedServer.jsonDataCharts.barChart);
};

let checkCarriles = () => {

  let side = document.querySelector('.sideSelect').value;
  let thead = document.querySelectorAll('.tableAbortKgs thead tr th .nLine');
  let valueSide = 11;

  if (side == 'b')
    valueSide = 1;

  thead.forEach((elem, i) => {
    elem.innerText = (i + valueSide);
  });
};

(() => {

  addFilterAndonAbort();
  initiateChartsProd();
  printTable();
  checkCarriles();

  tagsToObtainAbortData.forEach(async elem => {

    let dataToSubscribe = {
      tag: elem[0].tag,
      type: elem[0].type
    }

    let headers = {
      method: 'POST',
      body: JSON.stringify({ data: dataToSubscribe }),
      headers: { "content-type": "application/json; charset=utf-8" }
    };

    await fetch(`${dataNodeRedServer.url}/sbl_tags/subscribeTagData`, headers).then(json => json.json());
  });

  intervalTimer = setInterval(() => {
    updateChart();
  }, timeOfRefresh);

  setInterval(() => {

    tbodyTable.forEach(elemTable => {

      tagsToObtainAbortData.forEach(async (elem, j) => {

        let tagToSend = {
          tag: elem[0].tag,
          type: 'Integer'
        };

        let dataObtained = await fetch(`${dataNodeRedServer.url}/sbl_tags/readTagData?data=${JSON.stringify(tagToSend)}`).then(json => json.json());

        if (dataObtained.data) {
          elem[0].timer += timeOfRefresh;
          elem[0].kgAbort += (avgKgsAbortPerSecond * timeOfRefresh);
        }

        document.querySelector(`.tableAbortKgs tbody .${elemTable.class} .${elemTable.class}_sensor_${(j + 1)}`).innerText = elem[0].kgAbort;

        updateChart();
      });
    });

  }, (timeOfRefresh * 1000));

  document.querySelector('#lineSelect').addEventListener('change', () => { reInitiate(); });
  document.querySelector('#sideSelect').addEventListener('change', () => { reInitiate(); });

  let reInitiate = () => {

    checkCarriles();

    clearInterval(intervalTimer);
    initiateChartsProd();

    intervalTimer = setInterval(() => {
      updateChart();
    }, timeOfRefresh);
  };

})();

