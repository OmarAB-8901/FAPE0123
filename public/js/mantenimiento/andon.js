
import  tagsToObtainMaintenanceData from "./tagsMaintenance.js";
import dataNodeRedServer from "./../dataNodeRedServer.js";

// console.log(tagsToObtainMaintenanceData);

(() => {

   // setInterval( () => {
   setTimeout( () => {
      
      // let dataMaintenance = [];
      tagsToObtainMaintenanceData.tags.forEach(async elem => {
         
         let tagToSend = (elem[0].tag).toString();
         let dataObtained = await fetch(`${dataNodeRedServer.url}/obtainDataTags?tag=${tagToSend}`);
         // dataMaintenance.push(dataObtained);

         let rowData = document.querySelector(elem[1]);
      });
      
   }, 2000);
})();