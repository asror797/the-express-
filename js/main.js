// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });


// $(document).ready(function(){       
//    var scroll_start = 0;
//    var startchange = $('#startchange');
//    var offset = startchange.offset();
//     if (startchange.length){
//    $(document).scroll(function() { 
//       scroll_start = $(this).scrollTop();
//       if(scroll_start > offset.top) {
//           $(".navbar-default").css('background-color', '#222');
//        } else {
//           $('.navbar-default').css('background-color', 'transparent');
//        }
//    });
//     }
// });


const num1 = document.getElementById('firstNum'),
      num2 = document.getElementById('secondNum'),
      num3 = document.getElementById('thridNum'),
      num4 = document.getElementById('fourthNum'),
      content = document.getElementById('contentText')


num1.addEventListener('click',()=> {
   content.textContent="Solo weekly Gross $12.000 and more Team weekly Gross $16.000 and more"
   num1.classList.add('active-num')
   num2.classList.remove('active-num')
   num3.classList.remove('active-num')
   num4.classList.remove('active-num')

})

num2.addEventListener('click',()=> {
   content.textContent="Best Pass & Fuel Card Provided Referral Bonus Clean DOT Inspection Bonuses and many more."
   num2.classList.add('active-num')
   num1.classList.remove('active-num')
   num3.classList.remove('active-num')
   num4.classList.remove('active-num')

})

num3.addEventListener('click',()=> {
   content.textContent="Communication languages English , Uzbek, Russian, Turkish, Tadjik"
   num3.classList.add('active-num')
   num2.classList.remove('active-num')
   num1.classList.remove('active-num')
   num4.classList.remove('active-num')
})

num4.addEventListener('click',()=> {
   content.textContent="True route planning Verify credit of brokers or shippers Handle all necessary faxes and paperwork, including broker setup, insurance certificates and rate confirmations"
   num4.classList.add('active-num')
   num2.classList.remove('active-num')
   num1.classList.remove('active-num')
   num3.classList.remove('active-num')

})