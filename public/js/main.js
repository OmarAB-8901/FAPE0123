(() => {

  let timeOut_Session = Number(window.sessionStorage.getItem('SESSION_LIFETIME'));
  timeOut_Session = timeOut_Session == 0 ? (10 * 60000) : (timeOut_Session * 60000);

  let session_lifetime = setTimeout(() => { window.location.reload() }, timeOut_Session);

  document.querySelector('body').addEventListener('click', () => {
    clearInterval(session_lifetime);
    session_lifetime = setTimeout(() => { window.location.reload() }, timeOut_Session);
  });

  let locationSelected = window.location.href.split('/').at(-1);

  if (locationSelected == 'andon') {
    document.querySelector('.modulesFilterHistory').style = "display: none;";
    document.querySelector('.btn-search').style = "display: none;";
    // document.querySelector('.btn-download').style = "display: none;";
  } else if (locationSelected == 'history') {
    document.querySelector('.btn-download').style = "display: none;";
  }

  document.querySelector('.dropdown-item.exit').addEventListener('click', event => {

    document.querySelector('body #app .row .col-md-10.spinner').classList.toggle('noDisplay');
    document.querySelector('body #app .row .col-md-10.mainContent').classList.toggle('noDisplay');
  });
})();
