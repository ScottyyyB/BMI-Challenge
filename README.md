# BMI-Challenge

## Brief Description
This is my solution for the BMI Challenge, BMI stands for Body Mass Index and the BMI Test as you guessed is to test your Body Mass, based on your height and weight.

## Getting Started
Make sure you are using chrome as your browser, in your terminal type: `open SpecRunner.html`
* Should get: Jasmine Spec Runner Page (Top of page says Jasmine'). Right click on the page and click inspect
* Should get: Menu options on the top right of your screen, click 'Console'.

## Become a Person
In the Console, type: `var person = new Person({weight: 90, height: 186});`
* Should get: `undefined`

## Test BMI
In the Console, type in your desired method, imperial (FT/IN & Lbs) or metric (CM & Kgs): `person.calculate_metric();`
* Should get: `undefined`

## Check BMI
In the Console, type: `person.bmiValue;`
* Should get: `26.01`

## Check BMI Status
In the Console, type: `person.bmiMessage;`
* Should get: `Overweight`
