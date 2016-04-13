$(document).ready(function() {
    sec1=10;
    sec2=2;
    sec3=15;
    red= $('.red');
    yellow= $('.yellow');
    green= $('.green');
    t1=$(".sec1");
    t2=$(".sec2");
    t3=$(".sec3");
    setInterval(function() {
       if (sec1 < 0) {
           if (sec2 < 0) {
               red.css("background-color", " #ffbcad");
              yellow.css("background-color", " #fffc9b");
               green.css("background-color", " #2bcd1e");
               t2.html("");
               t3.html('<p>'+sec3+'</p>');
               sec3--;
               if(sec3 < 0){green.css("background-color", " #b3ff9e");
                   t3.html("");
                   sec1=10;sec2=2;sec3=15;}
               else if(sec3 <3 ){
                green.animate({ 'backgroundColor': '#b3ff9e' }, "slow"); }
           }
           else {
           yellow.css("background-color", " yellow");
           t1.html("");
           t2.html('<p>'+sec2+'</p>');
           sec2--;}
        }
        else {
            red.css("background-color", "red");
            t1.html('<p>'+sec1+'</p>');
            sec1--;}
    }, 1000);
});