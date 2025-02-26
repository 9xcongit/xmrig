const { chromium } = require('playwright');  // Sử dụng Chromium engine

async function run() {
  const browser = await chromium.launch({ headless: true });  // Chạy ở chế độ headless (không có GUI)
  const page = await browser.newPage();

  // Mở trang web
  await page.goto('https://www.thesmallflame.com');
  
  console.log('Trang web đã được mở thành công.');

  // Giữ trang web mở mãi mãi, không reload và chờ 30 giây
  console.log('Trang web sẽ mở và đợi 30 giây rồi tiếp tục.');

  // Đảm bảo script không kết thúc bằng cách chờ 30 giây
  await new Promise(resolve => setTimeout(resolve, 30000));  // Chờ 30 giây (30,000 mili-giây)
  
  console.log('30 giây đã trôi qua.');
}

run().catch(console.error);
