/** STICKY NAVBAR */

let navbar=$(".navbar"); // create un variable navbar and call the navbar from the selector(".navbar")
$(window).scroll(function(){  // create a scroll event on the window
let oTop=$(".section-2").offset().top-window.innerHeight;
if($(window).scrollTop()>oTop){
    navbar.addClass("sticky");
}else{
    navbar.removeClass("sticky");
}
});

// COUNTER ANIMATION

let nCount= function(selector){
    $(selector).each(function(){
        $(this).animate({

            Counter:$(this).text()
        },
        {
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        }
        );
    });
};
let a=0;
$(window).scroll(function(){
    let oTop = $(".numbers").offset().top-window.innerHeight;  
    if(a==0 && $(window).scrollTop()>=oTop){
        a++;
        nCount(".rect >h1");
    }
})