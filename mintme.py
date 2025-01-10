import sys
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView, QWebEnginePage
from PyQt5.QtWebEngineCore import QWebEngineSettings

class WebEngineWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl("https://www.thesmallflame.com"))  # Thay đổi URL nếu cần
        self.setCentralWidget(self.browser)

        # Chế độ web đầy đủ, bật JavaScript
        self.browser.page().settings().setAttribute(QWebEngineSettings.JavascriptEnabled, True)

        # Tự động tải lại sau một khoảng thời gian nếu cần
        self.setWindowTitle("24h Web Browser")
        self.resize(1024, 768)
        self.show()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = WebEngineWindow()

    # Duy trì trang web mở 24 giờ
    sys.exit(app.exec_())  # Chạy ứng dụng Qt cho đến khi đóng
