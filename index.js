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
    await page.waitForTimeout(10000);
    const button = await page.$("#__next > div > div.flex.w-full.flex-col.z-nav > div > div.pointer-events-none.absolute.top-0.left-0.flex.h-full.w-full.justify-center.px-5 > div > button");
    if (button) {
        await button.click();
    }
    await page.screenshot({path: 'lc.png', clip: {x: 1018, y: 72, width: 421, height: 204}});
    console.log(new Date().toUTCString());
    await browser.close();
})();

