$(document).ready(function() {
    let $btns = $('.button-group button');

    $btns.click(function(e) {

        $('.button-group button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });

        return false;

    })

    $('.button-group #btn1').trigger(click);

});


$(document).ready(function() {
    $('.test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}
    });
  });


  //owl-carousel

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        
        autoplay:true,
        dots:true,
        items:2,
        responsive:{
            0:{
                item:1
            },
            544:{
                item:2
            }
        }

    });
  });



