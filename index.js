const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: 100,
        defaultViewport: {
            width: 2560,
            height: 1440,
            deviceScaleFactor: 3
        }
    });
    const page = await browser.newPage();
    await page.goto('https://leetcode.com/hongsuzu/');
    await page.waitForTimeout(2000);
    await page.screenshot({path: 'lc.png', clip: {x: 1018, y: 72, width: 421, height: 204}});
    console.log(new Date().toUTCString());
    await browser.close();
})();

