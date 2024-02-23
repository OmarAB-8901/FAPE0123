
document.querySelectorAll('.sidebar-content .content .header-sidebar').forEach(elem => {

  elem.addEventListener('click', (header) => {

    let content = header.srcElement.parentElement.parentElement;
  
    console.log(content.classList.toggle('close'));
  });
});