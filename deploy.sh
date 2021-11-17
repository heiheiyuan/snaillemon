#!/usr/bin/env sh

# abort on errors
set -e

rm -rf .git
# build
yarn
npm run build

# 源码部署到snaillemon
git init
git add -A
git config user.name 蜗牛
git config user.email hyy8516998@163.com
git commit -m "蜗牛柠檬"
git remote add origin git@github.com:heiheiyuan/snaillemon.git
git push -f git@github.com:heiheiyuan/snaillemon.git master
rm -rf .git

# navigate into the build output directory
cd docs/.vuepress/dist

rm -rf .git

# io部署到yh-sun.github.io
git init
git add -A
git config user.name 蜗牛
git config user.email hyy8516998@163.com
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:heiheiyuan/heiheiyuan.github.io master
rm -rf .git

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
