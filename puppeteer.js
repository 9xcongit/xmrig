const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,  // Chạy không có giao diện đồ họa
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://9xhomestyle.blogspot.com');  // Thay URL trang web
    await page.waitForSelector('body');  // Đợi trang tải xong

    console.log('Page opened successfully');

    // Duy trì trình duyệt mở bằng cách sử dụng một vòng lặp vô hạn
    await new Promise(resolve => setInterval(resolve, 1000 * 60 * 60));  // Chạy mã mỗi giờ
})();
