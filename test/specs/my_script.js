var chai = require('chai');
var assert = chai.assert;

if (process.env.USE_METHOD === '3'){
  if (process.env.NUM_SCROLLS > 0){
    scrollInfinite(process.env.NUM_SCROLLS);
  }else{
    scrollInfinite(Math.floor(Math.random() * 5) + 1);
  }//if no NUM_SCROLLS is specified, scroll a random number of times between 1 and 5.
}else if (process.env.USE_METHOD === '4'){
  clickBoxes();
}

//Task 3
function scrollInfinite(numScrolls){
  describe('Infinite Scroll', function () {
    it(`should scroll ${numScrolls} times`, function () {
      browser.url('http://the-internet.herokuapp.com/infinite_scroll');
      for (let i = 0; i < numScrolls; i++){
        browser.scrollToBottom();
        //browser.pause(500);
      }
    });
  });
}

//Task 4
function clickBoxes(){
  describe ('Checkboxes', function () {
    var boxes;
    var num1Clicks = Math.floor(Math.random() * 10) + 1;
    var num2Clicks = Math.floor(Math.random() * 10) + 1;

    before(function () {
      browser.url('http://the-internet.herokuapp.com/checkboxes');
      boxes = browser.$$('input[type="checkbox"]');
    });

    it(`should click the first box ${num1Clicks} times`, function () {
      for (let i = 0; i < num1Clicks; i++){
        boxes[0].click();
      }
    });

    it (`should click the second box ${num2Clicks} times`, function() {
      for (let i = 0; i < num2Clicks; i++){
        boxes[1].click();
      }
    });
  });
}
