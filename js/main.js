let backToTopBtn = document.getElementById('back-to-top');
let counterElm = document.getElementById('product-slide-item');
let header = document.getElementById('menu-container');
function scrollDisplay(){
  let clientYOffset = window.pageYOffset;
  if(clientYOffset>150){
    header.style.height = "0";
    document.getElementById('first-list').style.display = "none";
    document.getElementById('location').style.display = "none";
    document.getElementById('header').style.paddingBottom = "20px";

  }else{
    header.style.height = '66px';
    document.getElementById('first-list').style.display = "flex";
    document.getElementById('location').style.display = "block";
    document.getElementById('header').style.paddingBottom = "0";
  }
}
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }    
      var firstSwiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
      });


      var Secondswiper = new Swiper('.product-slide-container', {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

      var bookSwiper = new Swiper('.slider-container',{
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });