/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#menu1").click(function(){
        displayValue = $("#menuPart1").css("display");
        $(".menuPart").hide();
                    
        if(displayValue == "none"){
            $("#menuPart1").toggle(); 
        }
                    
    });
    $("#menu2").click(function(){
        displayValue = $("#menuPart2").css("display");
        $(".menuPart").hide();
        if(displayValue == "none"){
            $("#menuPart2").toggle();
        }
    });
});

