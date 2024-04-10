( () => {

  let timeOut_Session = Number(window.sessionStorage.getItem('SESSION_LIFETIME'));
  timeOut_Session = (timeOut_Session * 60000);

  let session_lifetime = setTimeout(() => { window.location.reload() }, timeOut_Session);

  document.querySelector('body').addEventListener('click', () => { 
    clearInterval(session_lifetime);
    session_lifetime = setTimeout(() => { window.location.reload() }, timeOut_Session);
  });

  let locationSelected = window.location.href.split('/').at(-1);
   
  if(locationSelected == 'andon'){
    document.querySelector('.modulesFilterHistory').style = "display: none;";
    document.querySelector('.btn-download').style = "display: none;";
  }
})();