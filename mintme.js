const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true }); // hoặc use firefox hoặc webkit
  const page = await browser.newPage();
  await page.goto('https://www.thesmallflame.com');
  console.log("Trang web đang mở và duy trì...");

  // Duy trì trang web mở 24 giờ
  setInterval(async () => {
    console.log("Vẫn giữ trang web mở...");
  }, 3600000); // Mỗi 1 giờ

  // Đợi vô thời hạn
  await page.waitForTimeout(86400000);  // Đợi 24 giờ
  await browser.close();
})();
