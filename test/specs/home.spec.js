const assert = require('assert');
describe('Sauce Demo home page', () => {
    it('should have the right title', () => {
        // browser.execute('sauce:job-name=should have the right title');
        browser.url('https://www.saucedemo.com');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');

        // browser.execute('sauce:job-result=passed');
    });
});