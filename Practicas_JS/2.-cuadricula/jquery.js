$(document).ready(function () {
    
    $('.cuadricula').css({border: '3px solid tomato', height: '90', width: '90px', display: 'inline-block'});
    /*
    $('#idbtn').click(function () { 
        $('.cuadros1 .cuadricula:first').css({background: 'black'});
        $('.cuadros1 .cuadricula:last').css({background: 'black'});
        $('.cuadros1 .cuadricula:nth-of-type(5)').css({background: 'black'});
        $('.cuadros1 .cuadricula:nth-of-type(21)').css({background: 'black'});
        $('.cuadros2 .cuadricula#primeralinea').css({background: 'black'});
        $('.cuadros2 .cuadricula#ultimalinea').css({background: 'black'});
        $('.cuadros3 .cuadricula:first').css({background: 'black'});
        $('.cuadros3 .cuadricula:last').css({background: 'black'});
        $('.cuadros3 .cuadricula:nth-of-type(5)').css({background: 'black'});
        $('.cuadros3 .cuadricula:nth-of-type(21)').css({background: 'black'});
        $('.cuadros3 .cuadricula#diagonal').css({background: 'black'});
        $('.cuadros4 .cuadricula#lineadeenmedio').css({background: 'black'});
        $('.cuadros4 .cuadricula#lineadeenmedio2').css({background: 'black'});
    });
    */
    $('#idbtn1').click(function(){ 
        $('.cuadricula').css({border: '3px solid tomato', height: '90', width: '90px', display: 'inline-block',background: 'white'});
    });
    $('#idbtn2').click(function(){ 
        $('.cuadros1, .cuadros2, .cuadros3, .cuadros4').toggle(1000);
    });
    $('#idbtn01').click(function(){ 
        $('.cuadros1 :first,#5,#21, .cuadros1 :last').css({background: 'black'}); 
    });
    $('#idbtn02').click(function(){
        $('.cuadros1 #1,#2,#3,#4,#5,#21,#22,#23,#24,#25,#6,#11,#16,#10,#15,#20').css({background: 'black'});
    });
    $('#idbtn03').click(function(){
        $('.cuadros1 #3,#8,#13,#18,#23,#12,#11,#14,#15').css({background: 'black'});
    });
    $('#idbtn04').click(function(){ 
        $('.cuadros1 :first, .cuadros1 :last,#7,#13,#19,#5,#9,#17,#21').css({background: 'black'});
    });
    $('#idbtn05').click(function(){ 
        $('.cuadricula').css({background: 'black'});
    });
    $('#idbtn06').click(function(){ 
        $('div .cuadricula:nth-child(-n5)').css({background: 'black'});
        $('div .cuadricula:nth-last-child(-n5)').css({background: 'black'});
    });
});