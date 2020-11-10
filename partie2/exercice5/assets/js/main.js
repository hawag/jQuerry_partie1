$(document).ready(function(){
    $('.color').mouseover(function(){
        $('#text').css('color' , this.id);
    });
    $('.color').mouseout(function(){
        $('#text').css('color', 'black');

    });

});