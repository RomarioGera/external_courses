document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.dropdown-menu'),
    menuList = document.querySelector('.dropdown-list');

  menuBtn.addEventListener('click', function () {
    menuList.style.display = "inline-block";
  });

  document.addEventListener('click', function (e) {
    if (e.target !== menuBtn && menuList.style.display == 'inline-block') {
      menuList.style.display = "none";
    }
  });

}, false);