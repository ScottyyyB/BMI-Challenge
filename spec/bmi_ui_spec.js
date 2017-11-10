  describe('BMI Imperial', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#weight').val('176');
      $('#height').val('6 feet 3 inches');
      $('#calculate').trigger('click');
    });

    it("displays BMI Value Imperial Method", function() {
      expect($('#display-value').text()).toBe('Your BMI is 22');
    });

    it("displays BMI Message Imperial Method", function() {
      expect($('#display-message').text()).toBe('and you are Normal')
    });

    describe("BMI Imperial - Height in Inches", function() {
      beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#weight').val('176');
        $('#height').val('75');
        $('#calculate').trigger('click');
      });

      it("displays BMI Value Imperial Method", function() {
        expect($('#display-value').text()).toBe('Your BMI is 22');
      });

      it("displays BMI Message Imperial Method", function() {
        expect($('#display-message').text()).toBe('and you are Normal');
      });
    });
  });


  describe('BMI Metric', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#BMI-Method').val('metric');
      $('#weight').val('90');
      $('#height').val('186');
      // $('#BMI-Method option').filter(function() {
      //   return ($(this).text() == 'Metric');
      // }).prop('selected', true);
      $('#calculate').trigger('click');
    });


    it("display BMI Value", function() {
      expect($('#display-value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display-message').text()).toBe('and you are Overweight');
    });
  });
