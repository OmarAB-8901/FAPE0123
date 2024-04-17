
import dataMaintenance from "./tagsQuality.js";
import dataNodeRedServer from "../dataProject.js";

let tagsToObtainMaintenanceData = dataMaintenance.tags;
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

   setInterval( () => {
      
      tagsToObtainMaintenanceData.forEach(async elem => {
         
         let tagToSend = (elem[0].tag).toString();
         let line = document.querySelector('.lineSelect').value;
         let side = document.querySelector('.sideSelect').value;
         let dataObtained = await fetch(`${dataNodeRedServer.url}/sbl_tags/readTagData?tag=${tagToSend}&line=${line}&side=${side}`).then(json => json.json());
         
         document.querySelectorAll(`.${elem[1]} td:not(.event)`).forEach((elem, i) => {
            elem.innerText = dataObtained.data[i];
         });
      });
      
   }, 20000);
})();