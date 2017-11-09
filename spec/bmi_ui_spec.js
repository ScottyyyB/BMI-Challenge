  //
  //
  //
  describe('BMI Metric', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#metric-weight').val('90');
      $('#metric-height').val('186');
      $('#metric-calculate').trigger('click');
    });

    it("display BMI Value", function() {
      expect($('#display-value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display-message').text()).toBe('and you are Overweight');
    });
  });
