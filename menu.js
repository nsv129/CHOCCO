const modalMenu = document.querySelector("#modalOpen"),
      modal = document.querySelector("#menu"),
      modalClose = document.querySelector("#modalClose"),
      modalLink = document.querySelectorAll(".menu__link");


modalMenu.addEventListener("click", e => {
    modal.classList.add("fullscreen-menu--active");     
});

modalClose.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.remove("fullscreen-menu--active");
});

modalLink.forEach((item) =>{
    item.addEventListener("click", e => {
    modalClose.click();
  })
});

//modalLink.forEach(function(element) {
    //element.addEventListener("click", e => {
    //modalClose.click();
  //})
//});
