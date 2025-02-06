const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,  // Chạy không có giao diện đồ họa
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://9xhomestyle.blogspot.com');  // Thay URL trang web
    await page.waitForSelector('body');  // Đợi trang tải
    console.log('Page opened successfully');
    await browser.close();
})();
