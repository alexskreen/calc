$(document).ready(function(){
var add = function(number1, number2) {
    console.log("test");
    return number1 + number2;
    
};

  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  var multiply = function(number1, number2) {
    return number1 * number2;
  };
  
  var divide = function(number1, number2) {
    return number1 / number2;
  };
    $("#add-btn").click(function(){
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $(".answer").text(add(number1, number2));
    $(".result").show();
    event.preventDefault();
    });
    $("#sub-btn").click(function(){
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        $(".answer").text(subtract(number1, number2));
        $(".result").show();
        event.preventDefault();
        });
        $("#mult-btn").click(function(){
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        $(".answer").text(multiply(number1, number2));
        $(".result").show();
        event.preventDefault();
        });
        $("#div-btn").click(function(){
            var number1 = parseInt($("#add1").val());
            var number2 = parseInt($("#add2").val());
            $(".answer").text(divide(number1, number2));
            $(".result").show();
            event.preventDefault();
            });



 
});
