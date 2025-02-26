const puppeteer = require('puppeteer');

(async () => {
  // Mở trình duyệt Chromium
  const browser = await puppeteer.launch({ headless: false }); // Chạy với giao diện UI để bạn có thể thấy trình duyệt
  const page = await browser.newPage();
  
  // Truy cập website
  await page.goto('https://www.thesmallflame.com', { waitUntil: 'networkidle0' });

  // Giữ trang web mở mãi mãi (chờ vô hạn)
  console.log("Trang web https://www.thesmallflame.com đã được mở và đang chạy...");
  
  // Chờ vô hạn để giữ website mở
  await page.waitForTimeout(9999999999); // Chờ mãi mãi (hơn 100 ngày)
})();
