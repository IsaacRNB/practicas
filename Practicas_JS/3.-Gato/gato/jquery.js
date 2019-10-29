$(document).ready(function () {
    var t=0;
    $(".cuadro").click(function (e) { 
        if(t==0){
            $(this).html("o");
            t=1;
        }
        else{
            $(this).html("x");
            t=0;
        }
        
    });
});