var chai = require('chai');
var assert = chai.assert;

describe('Sortable Tables', function () {
  before(function () {
    browser.url('/tables');
  });

  var numColumns = 6;//browser.$$('#table1 thead tr th').length;
                     //unable to figure out why .length wasn't working..? :(
                     //so i just hardcoded the number of columns in...

  for (let i = 0; i < numColumns; i++){
    it (`should check that column ${i} sorts correctly`, function() {
      checkSort(i);
    });
  }

});

function checkSort(column){
  for (let i = 0; i < 2; i++){
    browser.$$('#table1 thead tr th')[column].click();
    var sortMode = browser.$$('#table1 thead tr th')[column].getProperty('className').replace(/header/g, "").trim();
    var rows = browser.$$('#table1 tbody tr').map(e => e.$$('td')[column].textContent);
    if (sortMode === "SortDown"){
      assert.isTrue(checkSortDown(rows), `Column ${column} sorted down correctly.`);
    }else{
      assert.isTrue(checkSortUp(rows), `Column ${column} sorted up correctly.`);
    }
    //browser.pause(500);
  }
}

function checkSortDown(elements){
  for (let i = 0; i < elements.length - 1; i++){
    if (elements[i] > elements[i+1])
      return false;
  }
  return true;
}

function checkSortUp(elements){
  for (let i = 0; i < elements.length - 1; i++){
    if (elements[i] < elements[i+1])
      return false;
  }
  return true;
}


//......was going to check for validity but decided to go in a different direction
/*function validName(testString){
  return !(/\d/.test(testString));
}
function validEmail(testString){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(testString);
}
function validPayment(testString){
  return /[$][0-9]+\.[0-9]{2}$/.test(testString);
}
function validWebsite(testString){
  return /(http|https):\/\/?(www.|)[^\s]+\.[^\s.]+$/.test(testString);
}*/
