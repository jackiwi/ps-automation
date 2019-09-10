var assert = require('assert');

describe('Login Page', function () {
  it('should log in', function () {
    browser.url('/login');
    browser.$('input[name="username"]').setValue('tomsmith');
    browser.$('input[name="password"]').setValue('SuperSecretPassword!');
    browser.$('button[type="submit"]').click();
    var pageUrl = browser.getUrl();
    assert.equal(pageUrl, 'http://the-internet.herokuapp.com/secure');
    //browser.pause(2000);
  });

  it('should log out', function () {
    browser.$('.button*=Logout').click();
    pageUrl = browser.getUrl();
    assert.equal(pageUrl, 'http://the-internet.herokuapp.com/login');
    //browser.pause(2000);
  });
});
