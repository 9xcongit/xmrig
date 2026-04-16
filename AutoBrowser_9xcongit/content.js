let timerId = null;
let scrollIntervalId = null;

function startScrolling() {
    // Tốc độ cuộn: Cuộn xuống 1 pixel mỗi 30 mili-giây
    // (Bạn có thể tăng/giảm số 30 này để thay đổi tốc độ cuộn: số càng nhỏ cuộn càng nhanh)
    const SCROLL_SPEED = 30;

    scrollIntervalId = setInterval(() => {
        // Kiểm tra xem đã cuộn đến cuối trang chưa
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
        
        if (!isAtBottom) {
            window.scrollBy(0, 1); // Cuộn xuống 1 pixel
        } else {
            // Nếu đã đến cuối trang thì dừng cuộn (vẫn đợi hết 2 phút mới chuyển trang)
            stopScrolling();
        }
    }, SCROLL_SPEED);
}

function stopScrolling() {
    if (scrollIntervalId) {
        clearInterval(scrollIntervalId);
        scrollIntervalId = null;
    }
}

function startAutoBrowse() {
    // Thời gian chờ ngẫu nhiên từ 1 phút (60,000 ms) đến 2 phút (120,000 ms)
    const MIN_TIME = 60000;
    const MAX_TIME = 120000;
    const waitTime = Math.floor(Math.random() * (MAX_TIME - MIN_TIME + 1)) + MIN_TIME; 

    console.log(`Auto Browser: Đang đếm ngược ${Math.round(waitTime/1000)} giây và từ từ cuộn trang...`);

    // Bắt đầu hiệu ứng cuộn trang từ từ
    startScrolling();

    timerId = setTimeout(() => {
        // Dừng cuộn trước khi chuyển trang
        stopScrolling();

        // Tìm tất cả các thẻ link <a> trên trang
        const links = document.querySelectorAll('a');
        const validLinks = [];

        links.forEach(link => {
            const href = link.href;
            // Chỉ lấy các link chứa 'https://9xcongit.com/post/', loại bỏ wp-admin và link neo (#)
            if (href && 
                href.includes('https://9xcongit.com/post/') && 
                !href.includes('wp-admin') && 
                !href.includes('#')) {
                 validLinks.push(href);
            }
        });

        if (validLinks.length > 0) {
            // Chọn một link ngẫu nhiên trong danh sách
            const randomIndex = Math.floor(Math.random() * validLinks.length);
            const nextUrl = validLinks[randomIndex];
            
            console.log("Auto Browser: Sẽ chuyển hướng đến -> " + nextUrl);
            
            // Chuyển hướng trong cùng 1 tab
            window.location.href = nextUrl; 
        } else {
            console.log("Auto Browser: Không tìm thấy link bài viết nào, sẽ tải lại trang hiện tại.");
            window.location.reload();
        }
    }, waitTime); // Sử dụng biến thời gian ngẫu nhiên
}

function stopAutoBrowse() {
    if (timerId) {
        clearTimeout(timerId);
        timerId = null;
    }
    stopScrolling();
    console.log("Auto Browser: Đã dừng.");
}

// Khởi tạo trạng thái khi trang vừa load xong
chrome.storage.local.get(['autoBrowseActive'], (result) => {
    if (result.autoBrowseActive) {
        startAutoBrowse();
    }
});

// Lắng nghe thay đổi khi bạn bật/tắt từ Popup
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes.autoBrowseActive) {
        if (changes.autoBrowseActive.newValue) {
            startAutoBrowse();
        } else {
            stopAutoBrowse();
        }
    }
});
