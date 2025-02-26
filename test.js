const puppeteer = require('puppeteer');

(async () => {
  // Mở trình duyệt Chromium ở chế độ headless
  const browser = await puppeteer.launch({
    headless: true, // Chạy không giao diện đồ họa
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Cấu hình thêm để tránh lỗi liên quan đến sandboxing
  });
  const page = await browser.newPage();
  
  // Truy cập website
  await page.goto('https://www.thesmallflame.com', { waitUntil: 'networkidle0' });

  // Giữ trang web mở mãi mãi (chờ vô hạn)
  console.log("Trang web https://www.thesmall
