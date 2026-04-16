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
            // Nếu đã đến cuối trang thì dừng cuộn (vẫn đợi hết thời gian mới chuyển trang)
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
    // 1. KIỂM TRA QUẢNG CÁO: Bỏ qua nếu bị kẹt ở trang quảng cáo Google Vignette
    if (window.location.href.includes('google_vignette')) {
        console.log("Auto Browser: Bị kẹt ở trang quảng cáo, đang tự động chuyển về trang chủ...");
        window.location.href = 'https://9xcongit.com/';
        return; // Ngừng thực thi để trang được chuyển ngay lập tức
    }

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

        // Danh sách 30 link cố định
        const FIXED_LINKS = [
            "https://9xcongit.com/youtube-premium/",
            "https://9xcongit.com/how-to-check-gmail-creation-date-using-google-takeout/",
            "https://9xcongit.com/what-is-browserstack/",
            "https://9xcongit.com/how-to-create-a-free-gmail-address-in-the-us/",
            "https://9xcongit.com/what-is-a-vpn-discover-safe-private-web-browsing/",
            "https://9xcongit.com/1-1-1-1/",
            "https://9xcongit.com/what-is-tiktok-how-to-make-money-from-tiktok/",
            "https://9xcongit.com/what-is-socks5/",
            "https://9xcongit.com/what-is-portable-software/",
            "https://9xcongit.com/what-is-docker/",
            "https://9xcongit.com/what-is-ssl/",
            "https://9xcongit.com/future/",
            "https://9xcongit.com/stock/",
            "https://9xcongit.com/1-usd/",
            "https://9xcongit.com/1-btc/",
            "https://9xcongit.com/how-to-open-a-successful-coffee-shop/",
            "https://9xcongit.com/steps-to-create-a-new-brand-and-start-selling/",
            "https://9xcongit.com/when-do-you-need-to-promote-your-business/",
            "https://9xcongit.com/increase-sales-with-repetitive-marketing-methods/",
            "https://9xcongit.com/the-crowd-effect-in-sales/",
            "https://9xcongit.com/increase-traffic-with-social-media-sharing-features/",
            "https://9xcongit.com/making-money-online-mmo-massive-online-opportunity/",
            "https://9xcongit.com/the-best-side-jobs-to-boost-your-income-from-home/",
            "https://9xcongit.com/stay-ahead-of-your-competitors-with-a-professional-seo-company/",
            "https://9xcongit.com/what-major-should-you-choose-to-create-million-view-content/",
            "https://9xcongit.com/how-to-try-nvidia-gpu-free/",
            "https://9xcongit.com/bitcoin/",
            "https://9xcongit.com/how-to-mine-dogecoin/",
            "https://9xcongit.com/how-to-create-free-46-vcpu-vps-with-root-access/",
            "https://9xcongit.com/how-to-get-a-free-vps-with-root-access-8vcpu/"
        ];

        // Chọn một link ngẫu nhiên trong danh sách 30 link
        const randomIndex = Math.floor(Math.random() * FIXED_LINKS.length);
        const nextUrl = FIXED_LINKS[randomIndex];
        
        console.log("Auto Browser: Sẽ chuyển hướng đến -> " + nextUrl);
        
        // Chuyển hướng trong cùng 1 tab
        window.location.href = nextUrl; 
        
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
