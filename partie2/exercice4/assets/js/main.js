// premiere façon de faire 

/*
$(document).ready(function(){
    $("#green").click(function(){ 
        $("#text").css('color' , 'green');
    });

}); */

// deuxieme façon de faire 

/*
$(document).ready(function(){
    $('.color').click(function(){
        var divColor = $(this).attr('id');
        $("#text").css('color' , divColor );
    
});  */

// troisieme façon de faire 

// le this fait reference à l'élelement qur lequel nous sommes en train de travailler, ici sur l'element sur lequel on va cliquer 

$(document).ready(function(){
    $('.color').click(function(){
        $("#text").css('color' , this.id); // le this.id il permet de recuperer tte les informatons et les propriétes de la div 

    });
});
