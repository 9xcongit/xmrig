const puppeteer = require('puppeteer');

(async () => {
  try {
    // Mở trình duyệt Chromium ở chế độ headless
    const browser = await puppeteer.launch({
      headless: true, // Chạy không giao diện đồ họa
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // Cấu hình thêm để tránh lỗi liên quan đến sandboxing
    });
    const page = await browser.newPage();
    
    // Truy cập website
    await page.goto('https://www.thesmallflame.com', { waitUntil: 'networkidle0' });

    // Giữ trang web mở mãi mãi (chờ vô hạn)
    console.log("Trang web https://www.thesmallflame.com đã được mở và đang chạy...");
    
    // Chờ vô hạn để giữ website mở
    await page.waitForTimeout(9999999999); // Chờ mãi mãi (hơn 100 ngày)
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
  }
})();
