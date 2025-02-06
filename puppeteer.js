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

    // Duy trì trình duyệt mở vô thời hạn bằng cách sử dụng một Promise
    await new Promise(() => {});  // Vòng lặp vô hạn này sẽ giữ cho chương trình không kết thúc
})();
