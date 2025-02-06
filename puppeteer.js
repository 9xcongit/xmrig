const puppeteer = require('puppeteer');

(async () => {
    // Khởi tạo trình duyệt
    const browser = await puppeteer.launch({
        headless: false,  // Chạy ở chế độ không ẩn (hiển thị trình duyệt)
        defaultViewport: null, // Giữ kích thước màn hình mặc định
        args: ['--start-maximized'] // Mở trình duyệt ở chế độ toàn màn hình
    });

    // Mở trang web
    const page = await browser.newPage();
    await page.goto('https://9xhomestyle.blogspot.com');  // Thay URL trang web

    // Đợi trang tải hoàn chỉnh
    await page.waitForSelector('body');  // Đảm bảo trang đã tải ít nhất phần thân (body)

    // In ra một số thông tin của trang (ví dụ: tiêu đề của trang)
    const title = await page.title();
    console.log('Page Title:', title);

    // Giữ trình duyệt mở và không đóng tự động
    // Không gọi browser.close() ở đây!
})();
