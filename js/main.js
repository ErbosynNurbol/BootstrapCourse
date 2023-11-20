
document.addEventListener('DOMContentLoaded',()=>{
      let asiteNavbar = document.querySelector('.asite-navbar');
      let secContainer = document.querySelector('#secContainer');
      let offsetTop =  secContainer.offsetTop;
    
      document.addEventListener("scroll", (event) => {
        let yTop = window.scrollY;
        let secImg = document.querySelector('.sec-img');
        if(yTop > 10 && !asiteNavbar.classList.contains('top-nav-collapse')){
            asiteNavbar.classList.add('top-nav-collapse');
        }
        if(yTop < 10 && asiteNavbar.classList.contains('top-nav-collapse')){
            asiteNavbar.classList.remove('top-nav-collapse');
        }
        if(yTop > (offsetTop-200)  && !secImg.classList.contains('slide-left')){
          secImg.classList.add('slide-left');
        }
      });
});