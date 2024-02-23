( () => {

   let namesDoughnutsChart = ['Disponibilidad', 'Rendimiento', 'Calidad', 'OEE', 'TEST_5', 'TEST_6'];
   let dataDoughnutsChart = [[98,2], [95,5], [99,1], [91,9], [91,9], [91,9]];
   let colorDoughnutsChart = ['rgba(56, 102, 242)', 'rgba(235, 246, 0)', 'rgba(246, 123, 0)', 'rgba(179, 0, 246)', 'rgba(179, 0, 246)', 'rgba(179, 0, 246)'];
 
   for(let i=1; i<=4; i++){
 
     let chartDoughnut = document.getElementById('chartDoughnut_'+i).getContext('2d');
 
     new Chart(chartDoughnut, {
       type: 'doughnut',
       // type: 'pie',
       data: {
         // labels: ['Red', 'Blue'],
         datasets: [
           {
             // label: ['Dataset 1', 'Dataset 2'],
             data: dataDoughnutsChart[(i-1)],
             backgroundColor: [colorDoughnutsChart[(i-1)], 'rgb(255, 99, 132)'],
           }
         ]
       },
       options: {
         responsive: true,
         plugins: {
           legend: {
             position: 'bottom',
           },
           title: {
             display: true,
             text: namesDoughnutsChart[(i-1)] + ": " + dataDoughnutsChart[(i-1)][0] + "%"
           }
         }
       },
     });
   }

  

   const ctx = document.getElementById('chartProduccion').getContext('2d');
   let smooth = false;
 
   new Chart(ctx, {
     type: 'line',
     data: {
       labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
       datasets: [{
         label: 'Disponibiliad',
         data: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
         borderColor: 'rgba(56, 102, 242, 0.9)',
         backgroundColor: 'rgba(56, 102, 242, 0.7)',
         fill: false,
         pointRadius: 3,
         pointHoverRadius: 18
       },{
         label: 'Rendimiento',
         data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         borderColor: 'rgb(235, 246, 0)',
         backgroundColor: 'rgb(235, 246, 0, 0.7)',
         fill: false,
         pointRadius: 3,
         pointHoverRadius: 18
       },{
         label: 'Calidad',
         data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
         borderColor: 'rgb(246, 123, 0)',
         backgroundColor: 'rgb(246, 123, 0, 0.7)',
         fill: false,
         pointRadius: 3,
         pointHoverRadius: 18
       },{
         label: 'OEE',
         data: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
         borderColor: 'rgb(179, 0, 246)',
         backgroundColor: 'rgb(179, 0, 246, 0.7)',
         fill: false,
         pointRadius: 3,
         pointHoverRadius: 18
       }]
     },
     options: {
       responsive: true,
       scales: {
         y: {
           beginAtZero: false
         }
       },
       elements: {
         line: { 
           tension: smooth ? 0.4 : 0
         }
       }
     }
   });
   
 })();