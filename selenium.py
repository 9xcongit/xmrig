import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


chrome_options = Options()
chrome_options.add_argument('--headless')  
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')


driver1 = webdriver.Chrome(options=chrome_options)


url1 = "https://anivia9002.blogspot.com"
driver1.get(url1)
print(f"opening: {url1}")


time.sleep(60*60*60)
time.sleep(60*60*60)
