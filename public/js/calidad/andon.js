
import dataQuality from "./tagsQuality.js";
import dataNodeRedServer from "../dataProject.js";

let tagsToObtainQualityData = dataQuality.tags;
let tbodyTable = dataQuality.dataTable;

let body = document.querySelector('.tableQuality tbody');
let tbody = "";
tbodyTable.forEach(elem => {

  tbody += `<tr class="${elem.class}">`;
  tbody += `<td class="event">${elem.event}</td> <td>${elem.tipo_dato}</td> <td>${elem.valor_referencia}</td> <td>-</td> <td>${elem.plc}</td>`;
  tbody += "</tr>";
});
body.innerHTML = tbody;

(() => {

  tagsToObtainQualityData.forEach(async elem => {

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

    tagsToObtainQualityData.forEach(async elem => {

      let dataToRead = {
        tag: elem[0].tag,
        type: elem[0].type,
        line: document.querySelector('.lineSelect').value,
        side: document.querySelector('.sideSelect').value
      }

      let dataObtained = await fetch(`${dataNodeRedServer.url}/sbl_tags/readTagData?data=${JSON.stringify(dataToRead)}`).then(json => json.json());

      document.querySelectorAll(`.${elem[1]} td:not(.event):nth-child(4)`).forEach((elem, i) => {
        elem.innerText = dataObtained.data;
      });
    });

  }, 5000);
})();
