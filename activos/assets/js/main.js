var i;
var divs = document.getElementsByClassName("titulo-wrap");
var wordsLimit = $(window).width() > 992 ? 50 : 13;

function wordCount(str) {
    return getWords(str).length;
}

function getWords(str){
    return str.split(" ");
}

function sliceWords(str){
    return str.slice(0, wordsLimit);
}

function joinEllipsis(str){
    return str.join(" ") + "...";
}

function share(platform, link, text){
    var url = '';
    switch (platform){
        case 'FB':
            url = 'https://www.facebook.com/sharer/sharer.php?u=http://laiguana.tv' + link;
            break;
        case 'TW':
            url = 'https://twitter.com/home?status='+ text +' http://laiguana.tv' + link + ' @la_iguanatv';
            break;
        case 'GP':
            url = 'https://plus.google.com/share?url=http://laiguana.tv' + link;
            break;
    }
    newwindow=window.open(url,'name','height=300,width=600');
    if (window.focus) {newwindow.focus()}
    return false;
};

function setCookie(cname, cvalue, exminutes, session) {
    console.log('Setting cookie ', cname, 'to', cvalue);
    var d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    var expires = session ? "" : ";" + "expires="+ d.toUTCString() + ";path=/";
    document.cookie = cname + "=" + cvalue + expires ;
}
function cookieValid(cname) {
    return getCookie(cname) != ""
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function share(platform, link, text){
    var url = '';
    switch (platform){
        case 'FB':
            url = 'https://www.facebook.com/sharer/sharer.php?u=http://laiguana.tv' + link;
            break;
        case 'TW':
            url = 'https://twitter.com/home?status='+ text +' http://laiguana.tv' + link + ' @la_iguanatv';
            break;
        case 'GP':
            url = 'https://plus.google.com/share?url=http://laiguana.tv' + link;
            break;
    }
    newwindow=window.open(url,'name','height=300,width=600');
    if (window.focus) {newwindow.focus()}
    return false;
};
    
function setCookie(cname, cvalue, exminutes, session) {
    console.log('Setting cookie ', cname, 'to', cvalue);
    var d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    var expires = session ? "" : ";" + "expires="+ d.toUTCString() + ";path=/";
    document.cookie = cname + "=" + cvalue + expires ;
}
function cookieValid(cname) {
    return getCookie(cname) != ""
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


for(i=0;i<divs.length;i++) {
    if(wordCount(divs[i].innerHTML) > wordsLimit){
        divs[i].innerHTML = joinEllipsis(sliceWords(getWords(divs[i].innerHTML)));
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<','>'],
        dotsEach: true,
        slideBy: 3,
        loop: true,
        lazyLoad: true,
        dots: false,
        responsive : {
            0 : {
                items: 2
            },
            1090 : {
                items: 3
            }
        }
    });

    $(".owl-carousel-destacados").owlCarousel({
        autoplay: true,
        items: 1,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        dotsEach: true,
        nav: true,
        navText: [
            "<i class='icon-chevron-left icon-white'><</i>",
            "<i class='icon-chevron-right icon-white'>></i>"
        ],
        loop: true,
        dots: false
    });

    $(".owl-carousel-television").owlCarousel({
        autoplay: true,
        items: 1,
        autoplayTimeout:5000,
        autoplayHoverPause: true,
        dotsEach: true,
        nav: true,
        navText: [
            "<i class='icon-chevron-left icon-white'><</i>",
            "<i class='icon-chevron-right icon-white'>></i>"
        ],
        loop: true,
        dots: false
    });
});

// $(window).load(function(){
//     var enableSplash = false;

//     // splashCookie se configura con un valor para no mostrar el splash con showSplashCookieExpiracy de tiempo de expiracion
//     var showSplashCookieExpiracy = 30;

//     if (!cookieValid("showSplash")){
//         console.log("showSplash Cookie is not set");

//         // if (true) {
//         if (!cookieValid("sessionSplash")) {
//             console.log("sessionSplash Cookie is not set");

//             if (enableSplash && $(window).width() > 992) {
//                 // el argumento del model recibe 'show' para ser mostrado y 'hide' para ocultarlo
//                 $('#splashBanner').modal('show');
//                 window.setTimeout(function () {
//                     $('#splashBanner').modal('hide');
//                 }, 1000 * 10);
//             }

//             setCookie("showSplash", 1, showSplashCookieExpiracy, false);
//             setCookie("sessionSplash", 1, showSplashCookieExpiracy, true);
//         } else {
//             console.log("sessionSplash Cookie is set, not showing the splash");
//         }
//     } else {
//         console.log("showSplash Cookie is set, not showing the splash");
//     }
// });

$('.marquee').marquee({
    pauseOnHover: true,
    duration: 10000,  
    startVisible: false
});
const twitterButton = document.querySelector('.twitter-shar-button');

if(twitterButton){
    twitterButton.innerHTML ='<img src="/activos/assets/img/tw-share-tag.png" alt="La Iguana Twitter" />';
}
