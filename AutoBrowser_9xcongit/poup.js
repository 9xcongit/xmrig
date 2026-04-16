document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const statusDiv = document.getElementById('status');

  // Tải trạng thái hiện tại từ bộ nhớ
  chrome.storage.local.get(['autoBrowseActive'], (result) => {
    updateUI(result.autoBrowseActive);
  });

  // Xử lý khi bấm nút "Bắt Đầu"
  startBtn.addEventListener('click', () => {
    chrome.storage.local.set({ autoBrowseActive: true }, () => {
      updateUI(true);
      
      // Kiểm tra xem đang ở trang 9xcongit.com chưa, nếu chưa thì mở trang đó
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          if(tabs[0].url && tabs[0].url.includes("9xcongit.com")) {
              chrome.tabs.reload(tabs[0].id); // Tải lại để kích hoạt script
          } else {
              chrome.tabs.create({url: "https://9xcongit.com/"});
          }
      });
    });
  });

  // Xử lý khi bấm nút "Dừng Lại"
  stopBtn.addEventListener('click', () => {
    chrome.storage.local.set({ autoBrowseActive: false }, () => {
      updateUI(false);
    });
  });

  // Cập nhật giao diện
  function updateUI(isActive) {
    if (isActive) {
      statusDiv.innerText = "Trạng thái: ĐANG HOẠT ĐỘNG";
      statusDiv.style.color = "#4CAF50";
    } else {
      statusDiv.innerText = "Trạng thái: ĐANG TẮT";
      statusDiv.style.color = "#f44336";
    }
  }
});
