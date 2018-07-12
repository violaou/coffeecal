var model = (function(){
    "use strict";
    console.log("here");
    window.onload = function(){
        document.getElementById("res").style.display = "none";
    };

    document.getElementById("input_form").onsubmit = function(e){
      console.log("here");
      e.preventDefault();
      var calories = document.getElementById("calorie_input").value;
      console.log(calories);
      localStorage.setItem('input', JSON.stringify(calories));
      document.getElementById("res").style.display = "block";
    }
}())
