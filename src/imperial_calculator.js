// function ImperialCalculator(){
//
// };
//
// ImperialCalculator.prototype.imperial_bmi = function(obj) {
//   var weight = obj.weight;
//   var height = obj.height;
//   var convertedHeight = [];
//   height = height.split(' ').forEach(function(item) {
//     item = parseInt(item);
//     if (!isNaN(item)) {
//       convertedHeight.push(item);
//     }
//   });
//
//
// if (convertedHeight.length == 2) {
//   height = (convertedHeight[0] * 12 + convertedHeight[1]).toString();
// } else if (convertedHeight.length == 1 && convertedHeight[0] >= 30){
//   height = (convertedHeight[0]).toString();
// }
// weight = parseInt(weight) * 703;
//
//   if (weight > 0 && height > 0) {
//     var finalBmi = weight / (height * height);
//     obj.bmiValue = parseFloat(finalBmi.toFixed(2));
//     setIMPBMIMessage(obj);
//   }
// };
//
// function setIMPBMIMessage (obj) {
//   if (obj.bmiValue < 18.5) {
//     obj.bmiMessage = "Underweight"
//   }
//   if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
//     obj.bmiMessage = "Normal"
//   }
//   if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
//     obj.bmiMessage = "Overweight"
//   }
//   if (obj.bmiValue >= 30) {
//     obj.bmiMessage = "Obese"
//   }
// }
