$(document).ready(function(){
    $("#demo").text("Hello jQuery!");
    $("#box").css("background-color", "lightblue");
    $("#btn").click(function(){
    $("#demo").hide();
    });
    $("#btn").click(function(){
    $("#demo").show();
    });
    $("#btn").click(function(){
    $("#demo").toggle();
    });
    $("#demo").addClass("highlight");
});
