// برای نمایش منوی اصلی
document.querySelector('.menubar').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
  });
  
  // برای نمایش زیرمنو
  document.querySelectorAll('li > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // جلوگیری از اجرای لینک
      const subMenu = this.nextElementSibling;
      if (subMenu && subMenu.classList.contains('sub-menu')) {
        subMenu.classList.toggle('show');
      }
    });
  });