
// let locationSelected = window.location.href.split(':')[2].replace('88', '');
try {
  let locationSelected = (window.location.href.split('/')).splice(3).join('/');
  document.querySelector(`a[href*="${locationSelected}"]`).classList.toggle('selected');
  
  let selectedSection = document.querySelector(`a[href*="${locationSelected}"]`).parentElement.parentElement;
  if(selectedSection.classList[0] == 'inner_menu'){

    selectedSection.classList.toggle('close');
    selectedSection.parentElement.parentElement.classList.toggle('close');
  
    let content = document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1];
    content.querySelector('.body-sidebar').style = "height: auto";
  } else {  
    selectedSection.classList.toggle('close');
  }
} catch (error) {
  console.warn(error);
}
// console.log(locationSelected)

document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1].querySelector('.header-sidebar').addEventListener('click', elem => { 
  
  elem.srcElement.querySelectorAll('.content.inner_menu:not(.close)').forEach(inner => {
    inner.classList.toggle('close');
  });

  elem.srcElement.parentElement.parentElement.querySelector('.body-sidebar').style = "height: 10.3vh"; 
});

document.querySelectorAll('.sidebar-content .content .header-sidebar:not(.inner_menu)').forEach((elem, i) => {

  elem.addEventListener('click', (header) => {

    document.querySelectorAll('.sidebar-content .content:not(.close):not(.inner_menu)').forEach(menu => {

      document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1].querySelector('.body-sidebar').style = "height: 10.3vh;";

      document.querySelectorAll('.body-sidebar .content.inner_menu:not(.close)').forEach(elem => {
        elem.classList.toggle('close');
      });

      setTimeout(() => {
        menu.classList.toggle('close');
      }, 150);
    });

    let content = header.srcElement.parentElement.parentElement;
    setTimeout(() => {
      content.classList.toggle('close');
    }, 250);
  });
});

document.querySelectorAll('.sidebar-content .content .body-sidebar .inner_menu .header-sidebar.inner_menu').forEach(elem => {

  elem.addEventListener('click', el => {

    document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1].querySelector('.body-sidebar').style = "height: auto";

    document.querySelectorAll('.body-sidebar .content.inner_menu:not(.close)').forEach(elem => {

      elem.classList.toggle('close');
    });

    setTimeout(() => {
      el.srcElement.parentElement.parentElement.classList.toggle('close');
    }, 150);
  });
});