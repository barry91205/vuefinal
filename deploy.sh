#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# 部署到自定義網域
# echo 'www.example.com' > CNAME

# git init
git checkout -B main
git add -A
git commit -m 'deploy'
# barry91205.github.io/vuefinal
# 部署到 https://barry91205.github.io
# git push -f git@github.com:barry91205/barry91205.github.io.git master

# 部署到 https://barry91205.github.io/6week
# git push -f git@github.com:barry91205/6week.git master:gh-pages
# 以這個專案來講就要改成這樣以下這樣，下面是走 ssh 模式
git push -f git@github.com:barry91205/vuefinal.git master:gh-pages
# 除此之外，也可以改走 HTTPS 模式
# git push -f https://github.com/barry91205/vuefinal.git master:gh-pages

cd -
