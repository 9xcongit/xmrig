const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true }); // firefox or webkit
  const page = await browser.newPage();
  await page.goto('https://ads.alexamaster.com/?id=1850');
  console.log("opening...");

  // open
  setInterval(async () => {
    console.log("keeping...");
  }, 3600000); // Mỗi 1 giờ

  // keep
  await page.waitForTimeout(86400000);  // 24h
  await browser.close();
})();
