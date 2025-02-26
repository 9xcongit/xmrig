const { chromium } = require('playwright');  // Sử dụng Chromium engine

async function run() {
  const browser = await chromium.launch({ headless: true });  // Chạy ở chế độ headless (không có GUI)
  const page = await browser.newPage();

  // Mở trang web
  await page.goto('https://www.thesmallflame.com');
  
  console.log('Trang web đã được mở thành công.');

  // Để trang web mở mãi mãi, chúng ta có thể giữ nó sống bằng cách liên tục giữ session hoặc thỉnh thoảng thực hiện một tác vụ
  while (true) {
    await page.reload(); // Reload trang sau mỗi 5 phút
    console.log('Trang đã được tải lại.');
    await new Promise(resolve => setTimeout(resolve, 300000)); // Chờ 5 phút
  }

  // Nếu bạn muốn dừng script này, bạn có thể đóng browser:
  // await browser.close();
}

run().catch(console.error);
