function bmiCalculator(weight,height){
    var bmi = weight/Math.pow(height,2);
    var bmi = Math.round(weight/height*height);
    var interpretation= " "; //An empty container for interpretation

if (bmi < 18.5){
    interpretation="Your BMI is " + bmi + ", so you are underweight.";
}

else if (bmi > 18.5 && bmi < 24.9){
    interpretation="Your BMI is " + bmi + ", so you have a normal weight.";
}

else if(bmi>24.9){
    interpretation ="Your BMI is " + bmi + ", so you are overweight.";
}

else{
    interpretation="invalid";
}

return interpretation;
}

//inputs
console.log(bmiCalculator(65,1.8));