
document.querySelectorAll('.cocoen').forEach(function(e){
  new Cocoen(e);
});



  AOS.init();



  $(document).on('click', '.trigger-iFrame', function(event) {
    event.preventDefault();
    $('#modal-iFrame').iziModal('open', this); // Do not forget the "this"
  });

  //Modal options
$("#modal-iFrame").iziModal({
  title: 'Музеи военной истории', //Modal title
  fullscreen: false, //Icon to expand modal to fullscreen
  headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
  overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
  width: '910px'
  // iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
  // iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
});
  $(document).on('click', '.trigger-iFrame-2', function(event) {
    event.preventDefault();
    $('#modal-iFrame-2').iziModal('open', this); // Do not forget the "this"
  });

  //Modal options
$("#modal-iFrame-2").iziModal({
  title: 'Модели в руках', //Modal title
  fullscreen: false, //Icon to expand modal to fullscreen
  headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
  overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
  width: '910px'
  // iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
  // iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
});

$(document).on('click', '.trigger-iFrame-3', function(event) {
  event.preventDefault();
  $('#modal-iFrame-3').iziModal('open', this); // Do not forget the "this"
});

$("#modal-iFrame-3").iziModal({
  title: 'Взгляд на сражения ВОВ', //Modal title
  fullscreen: false, //Icon to expand modal to fullscreen
  headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
  overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
  width: '910px'
  // iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
  // iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
});

$(document).on('click', '.trigger-iFrame-4', function(event) {
  event.preventDefault();
  $('#modal-iFrame-4').iziModal('open', this); // Do not forget the "this"
});

$("#modal-iFrame-4").iziModal({
  title: 'Виртуальные путешествия в смартфоне', //Modal title
  fullscreen: false, //Icon to expand modal to fullscreen
  headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
  overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
  width: '910px'
  // iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
  // iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
});
$(document).on('click', '.trigger-iFrame-5', function(event) {
  event.preventDefault();
  $('#modal-iFrame-5').iziModal('open', this); // Do not forget the "this"
});

$("#modal-iFrame-5").iziModal({
  title: 'Портал для смартфона', //Modal title
  fullscreen: false, //Icon to expand modal to fullscreen
  headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
  overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
  width: '910px'
  // iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
  // iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
});
$(document).on('click', '.trigger-iFrame-6', function(event) {
  event.preventDefault();
  $('#modal-iFrame-6').iziModal('open', this); // Do not forget the "this"
});

$("#modal-iFrame-6").iziModal({
  title: 'The Mountain', //Modal title
  fullscreen: false, //Icon to expand modal to fullscreen
  headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
  overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
  width: '910px'
  // iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
  // iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
});
$(document).on('click', '.trigger-iFrame-7', function(event) {
  event.preventDefault();
  $('#modal-iFrame-7').iziModal('open', this); // Do not forget the "this"
});



$(document).ready(function(){
  // $('#video_play').click(function(){
  //   let dataYoutube = $(this).parents('.videoPlayer-wrapper__js-video').attr('data-youtube');
  //   $(this).parents('.videoPlayer-wrapper__js-video').html('<iframe width=100% height=640 src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  // })
  
  $('.videoPlayer-wrapper__video').click(function(){
    $('.videoPlayer-wrapper__video').attr('controls', 'true');
    $('.videoPlayer-wrapper__video').attr('autoplay', 'true');
  })
  
});


$(document).ready(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() > 70){
      $( ".header" ).addClass('scroll');
    }else{
      $( ".header" ).removeClass('scroll');
    }
  });

});




$(document).ready(function(){
  $('.burger-active').click(function(){
    $('.header-wrapper__dropdown').css('right', 0);
    $('.bg-shadow').css('display', 'block');
  })

  $('.bg-shadow').click(function(){
    $('.header-wrapper__dropdown').css('right', '-1000px');
    $('.bg-shadow').css('display', 'none');
  })
  
  jQuery(document).ready(function() {
    jQuery(window).bind("load", function() {
      //Пример исключения ссылки
      //jQ ('a[href*="#"]:not([href="#"],[href="#spu-209"],[href="#spu-211"],[href="#spu-212"],[href="#spu-213"],[href="#spu-214"],[href="#spu-215"],[href="#spu-217"])').click(function() {
      jQuery('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
          location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            jQuery("html, body").animate({
              // $('html, body').animate({
              scrollTop: target.offset().top - 10
            }, 1000);
            return false;
          }
        }
      });
    });
  });
  jQuery(window).load(function() {
    function goToByScroll(id) {
      jQuery("html, body").animate({
        scrollTop: jQuery("#" + id).offset().top - 10
      }, 1000);
    }
    if (window.location.hash != '') {
      goToByScroll(window.location.hash.substr(1));
    }
  });
  
  

  
  
});