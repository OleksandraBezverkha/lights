//$(".red").style.backgroundColor = "blue";
////elem.style.backgroundColor = "red";
//alert(1111);
//document.getElementsByClassName("red")[0].style.background = "blue";
//alert(2222);
//window.onload = function() {
//  document.getElementsByClassName("red")[0].style.background = "blue";
//};
$(document).ready(function() {
    //$('.red').css("background-color", "red");
    //alert(11111)
    var sec1=10;
    var sec2=2;
    var sec3=15;
   var red= setInterval(function() {
       if (sec1 < 0) {
           if (sec2 < 0) {
               $('.red').css("background-color", " #ffbcad");
               $('.yellow').css("background-color", " #fffdcb");
               $('.green').css("background-color", " #2bcd1e");
               $(".sec2").html("");
               $(".sec3").html(sec3);
               sec3--;
               if(sec3 < 0){$('.green').css("background-color", " #cfffcc");
                   $(".sec3").html("");
                   sec1=10;sec2=2;sec3=15;}
               else if(sec3 <3 ){
                $('.green').fadeOut(500).fadeIn(500);}
           }
           else {
           $('.yellow').css("background-color", " yellow");
           $(".sec1").html("");
           $(".sec2").html(sec2);
           sec2--;}
        //clearInterval(red);
        }
        else {
            $('.red').css("background-color", "red");
            $(".sec1").html(sec1);
            sec1--;}
    }, 1000);
});