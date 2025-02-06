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

    // Giữ trình duyệt mở 24 giờ (hoặc lâu hơn)
    setInterval(() => {
        console.log('Browser is still running...');
    }, 60000);  // Mỗi phút in ra thông báo để giữ ứng dụng chạy

    // Nếu bạn không gọi `browser.close()` thì trình duyệt sẽ vẫn mở
})();
