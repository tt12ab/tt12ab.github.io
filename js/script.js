// let searchitem = document.querySelector('.overlay-search');

// document.querySelector('#search-item').onclick = () =>{
//     searchitem.classList.toggle('active');
// }

// slide show heder
var couter =1;
setInterval(function(){
    document.getElementById('radio'+ couter).checked = true;
    couter++;
    if(couter>4){
        couter = 1;
    }
},3000);

// var index = 1;
// changeImage = function(){
//     var imgs = ["./image/slide show/slide-1.jpg","./image/slide show/slide-2.jpg","./image/slide show/slide-3.jpg"];
//     document.getElementById('img').src = imgs[index];
//     index++;
//     if(index==3){
//         index = 0;
//     }
// }
// setInterval(changeImage,2000);


// slide show footer
$(document).ready(function() {
    var stt = 0;
    startItem = $(".banner-img-item:first").attr("stt");
    endItem = $(".banner-img-item:last").attr("stt");
    $(".banner-img-item").each(function() {
        if($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $(".icon-next").click(function() {
        if(stt == endItem) {
            stt = -1;

        }
        next = ++stt;
        $(".banner-img-item").hide();
        $(".banner-img-item").eq(next) .show();
    });
    $(".icon-prev").click(function() {
        if(stt == 0){
            stt = endItem;
            prev = stt++;
        }
        prev = --stt;
        $(".banner-img-item").hide();
        $(".banner-img-item").eq(prev) .show();
    });
    setInterval(function() {
        $(".icon-next").click();
    },2000)
});

//  làm hiệu ứng scroll
$(document).ready(function(){
    $(window).scroll(function(){
        $(".fade-up-down").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("up-down");
            }
        });
    });
})

// hiệu ứng loading
$(window).on('load', function(event) {
    $('body').removeClass('preloading');
       // $('.load').delay(1000).fadeOut('fast');
    $('.loading').delay(500).fadeOut('fast');
 });

// click backtop

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('.backtop').addClass("backtop-in");
        }
        else{
            $('.backtop').removeClass("backtop-in");
        }
    });
    $('.backtop').click(function() {
        $('html, body').animate({
            scrollTop:0
        }, 500);
    });
});

// main img product

var mainimg = document.getElementById('mainimg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}
smallimg[4].onclick = function(){
    mainimg.src = smallimg[4].src;
}

var productimgmain = document.getElementById('productimgmain');
var productsmall = document.getElementsByClassName('productsmall');

productsmall[0].hoverState = function(){
    productimgmain.src = productsmall[0].src;
}
productsmall[1].hoverState = function(){
    productimgmain.src = productsmall[1].src;
}
productsmall[2].hoverState = function(){
    productimgmain.src = productsmall[2].src;
}
productsmall[3].hoverState = function(){
    productimgmain.src = productsmall[3].src;
}
productsmall[4].hoverState = function(){
    productimgmain.src = productsmall[4].src;
}

let shoppingCart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    
}
{/* <script>
        const login = document.querySelector(".item-login")
        const registration = document.querySelector(".item-registration")
        if(login) {
            login.addEventListener('click', function(){
              document.querySelector(".item-login").style.color= "red" 
              document.querySelector(".item-registration").style.color= "black"  
              document.querySelector(".registration-form").style.display="none"
              document.querySelector(".login-form").style.display="block"
            })
        }
        if(registration) {
            registration.addEventListener('click', function(){
              document.querySelector(".item-login").style.color= "black" 
              document.querySelector(".item-registration").style.color= "red" 
              document.querySelector(".registration-form").style.display="block"
              document.querySelector(".login-form").style.display="none"
            })
        }
    </script> */}