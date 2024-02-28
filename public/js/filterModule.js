
document.querySelectorAll('.typeSearch .btn').forEach(elem => {

   elem.addEventListener('click', event => {

      document.querySelectorAll('.typeSearch .btn.btn-info').forEach(elem => {

         elem.classList.toggle('btn-info');
         elem.classList.toggle('btn-outline-info');
      });

      document.querySelectorAll('.typeSearch .btn.btn-info').forEach(elem => {

         elem.classList.toggle('btn-info');
         elem.classList.toggle('btn-outline-info');
      });

      document.querySelector('.selectorsFilters .row.search:not(.hidden)').classList.toggle('hidden');
      document.querySelector('.selectorsFilters .row.search.' + event.srcElement.classList[0]).classList.toggle('hidden');

      event.srcElement.classList.toggle('btn-outline-info');
      event.srcElement.classList.toggle('btn-info');
   });
});