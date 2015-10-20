var calcBMI = function(){
  var weightField = document.getElementById("weightField");
  var heightField = document.getElementById("heightField");
  var weight = weightField.value
  var height = heightField.value
  var bmi = weight/(height*height)
  var r = document.getElementById("result");
  r.innerHTML = ("Your BMI is " + bmi);

  var cat = document.getElementById("category");
  if(bmi < 18.5){
    cat.innerHTML = ("Underweight");
  }else if(bmi < 25){
    cat.innerHTML = ("Normal");
  }else if (bmi < 30) {
    cat.innerHTML = ("Fat");
  }else if(bmi > 30) {
    cat.innerHTML = ("Jensen + Luke");
  }
}

//calcBMI();
