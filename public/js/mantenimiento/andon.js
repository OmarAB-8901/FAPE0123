
import dataMaintenance from "./tagsMaintenance.js";
import dataNodeRedServer from "../dataProject.js";

let tagsToObtainMaintenanceData = dataMaintenance.tags;
let tbodyTable = dataMaintenance.dataTable;

let body = document.querySelector('.tableMaintenance tbody');
let tbody = "";
tbodyTable.forEach(elem => {

  tbody += `<tr class="${elem.class}">`;
  tbody += `<td class="equipo">${elem.equipo}</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td>`;
  tbody += "</tr>";
});
body.innerHTML = tbody;

(() => {

  tagsToObtainMaintenanceData.forEach(async elem => {

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

  setInterval(() => {

    tagsToObtainMaintenanceData.forEach(async elem => {

      let dataToRead = {
        tag: elem[0].tag,
        type: elem[0].type,
        line: document.querySelector('.lineSelect').value,
        side: document.querySelector('.sideSelect').value
      }

      let dataObtained = await fetch(`${dataNodeRedServer.url}/sbl_tags/readTagData?data=${JSON.stringify(dataToRead)}`).then(json => json.json());
      dataObtained = typeof dataObtained.data == 'string' ? dataObtained.data.split(';').filter( elem => { if(elem != 'Min') return elem } ) : [];

      document.querySelectorAll(`.${elem[1]} td:not(.equipo)`).forEach((elem, i) => {
        elem.innerText = dataObtained[i] != undefined ? dataObtained[i] : '-';
      });
    });

  }, 30000);
})();
