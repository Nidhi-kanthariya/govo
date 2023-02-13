/*=====================
  Email App js
==========================*/

const leftSidebarHeaderToggle = document.querySelector('.left-sidebar-toggle-btn');
const leftSidebarBtn = document.querySelector('.left-sidebar-toggle');
const leftSidebar = document.querySelector('.left-sidebar-aside');
const leftHeaderLogoShowOptions = document.querySelector('.left-sidebar-hide-logo-show');
leftSidebarBtn?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  leftSidebarHeaderToggle.classList.toggle('hide');
  leftHeaderLogoShowOptions?.classList.toggle('hide');
});
leftSidebarHeaderToggle?.addEventListener('click', function (e) {
  leftSidebar.classList.toggle('left-hide-show-sidebar');
  leftSidebarHeaderToggle.classList.toggle('hide');
  this.closest('.left-sidebar-hide-logo-show')?.classList.toggle('hide');
});

// let leftSidebarHeaderToggle = document.querySelectorAll('.left-sidebar-toggle-btn');
// const leftSidebarBtn = document.querySelector('.left-sidebar-toggle');
// const leftSidebar = document.querySelector('.left-sidebar-aside');
// const leftHeaderLogoShowOptions = document.querySelectorAll('.left-sidebar-hide-logo-show');
// leftSidebarHeaderToggle.forEach((dataItem, index) =>{
//   dataItem.addEventListener('click', (event) => {
//   leftSidebar.classList.toggle('left-hide-show-sidebar');
//   leftSidebarHeaderToggle.classList.toggle('hide');
//   this.closest('.left-sidebar-hide-logo-show')?.classList.toggle('hide');
//   });
// });

// leftSidebarBtn.forEach((dataItem1, index) =>{
//   dataItem1.addEventListener('click', (event) => {
//   leftSidebar.classList.toggle('left-hide-show-sidebar');
//   leftSidebarHeaderToggle.classList.toggle('hide');
//   leftHeaderLogoShowOptions?.classList.toggle('hide');
//   });
// });


/*=====================
  Email hide/show js
==========================*/

const emailList =document.querySelector(".emailList");
const emailRead =document.querySelector(".emailRead");
let listItems = document.querySelectorAll('.btnEmailRead');
const btnEmail = document.querySelector(".btnEmail");

listItems.forEach((item, index) => {
  item.addEventListener('click', (event) => {
     emailRead.classList.add("show");
     emailList.classList.add("hide");
  });
});

btnEmail?.addEventListener('click', function (e) {
  emailRead.classList.remove("show");
  emailList.classList.remove("hide");
});


/*=====================
  Close alert js
==========================*/

  var alert_del = document.querySelectorAll('.alert-del');
  alert_del.forEach((x) =>
    x.addEventListener('click', function () {
      x.parentElement.classList.add('hidden');
    })
  );