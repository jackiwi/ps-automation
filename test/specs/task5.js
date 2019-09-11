var chai = require('chai');
var assert = chai.assert;

describe('Dropdown', function () {
  it('should pick from a dropdown', function () {
    browser.url('/dropdown');
    var index = Math.floor(Math.random() * 2) + 1;

    browser.$('select[id="dropdown"]').selectByIndex(index);
    
    var value = browser.$('option[selected="selected"]');
    assert.notEqual(value.getText(), 'Please select an option');
    //browser.pause(2000);
  });
});
