
document.querySelectorAll('.sidebar-content .content .body-sidebar .inner_menu .header-sidebar').forEach(elem => {

  elem.addEventListener('click', () => {

    document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1].querySelector('.body-sidebar').style = "height: auto";
  });
});

document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1].querySelector('.header-sidebar').addEventListener('click', () => {

  let content = document.querySelectorAll('.sidebar-content .content:not(.inner_menu)')[1];
  
  content.querySelectorAll('.inner_menu.content:not(.close').forEach(elem => { elem.classList.toggle('close') });
  content.querySelector('.body-sidebar').style = "height: 10.3vh";
});

document.querySelectorAll('.sidebar-content .content .header-sidebar').forEach((elem, i) => {

  elem.addEventListener('click', (header) => {
  
    let content = header.srcElement.parentElement.parentElement;
    setTimeout(() => {
      content.classList.toggle('close');
    }, 100);
  }); 
});

//  let closeAllElementsMenu = () => {
 
//    document.querySelectorAll('.sidebar-content .content:not(.close)').forEach(elem => {
 
//      console.log(elem);
//    });
//  };