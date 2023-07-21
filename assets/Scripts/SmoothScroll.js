document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset;

      window.scroll({
        top: topOffset,
        behavior: 'smooth'
      });
    });
  });