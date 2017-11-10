// describe("ImperialCalculator", function() {
//   var person;
//   var calculator;
//
//
//   beforeEach(function() {
//     person = new Person({weight: '176', height: '6 feet 3 inches'});
//     calculator = new ImperialCalculator();
//   });
//
//   it("calculates BMI for a person using imperial method", function() {
//     calculator.imperial_bmi(person);
//     expect(person.bmiValue).toEqual(22.00);
//   });
//
//   beforeEach(function() {
//     person = new Person({weight: '176', height: '75 inches'});
//   });
//   it("calculates BMI for a person using imperial method when given inches", function() {
//     calculator.imperial_bmi(person);
//     expect(person.bmiValue).toEqual(22.00);
//   });
//
//   describe("Imperial BMI Error", function() {
//     beforeEach(function() {
//       person = new Person({weight: '176', height: '25 inches'});
//     });
//     it("does not calculate BMI for a person with height below 30 inches", function() {
//       calculator.imperial_bmi(person);
//       expect(person.bmiValue).toEqual(undefined);
//     });
//   });
// });
