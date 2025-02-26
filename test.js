const { chromium } = require('playwright');  // Sử dụng Chromium engine

async function run() {
  const browser = await chromium.launch({ headless: true });  // Chạy ở chế độ headless (không có GUI)
  const page = await browser.newPage();

  // Mở trang web
  await page.goto('https://www.thesmallflame.com');
  
  console.log('Trang web đã được mở thành công.');

  // Giữ trang web mở mãi mãi, không reload
  console.log('Trang web sẽ mở mãi mãi cho đến khi bạn dừng tiến trình này.');
  
  // Đảm bảo script không kết thúc bằng cách chờ vô thời hạn
  await new Promise(() => {});  // Chờ mãi mãi, giữ script không kết thúc
}

run().catch(console.error);
