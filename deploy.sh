git pull origin dev
echo 更新本地代码
npm i
echo 依赖安装完成。
npm run build
echo 打包完成，准备重启。
export NITRO_PORT=5000
pm2 restart ./ecosystem.config.js
echo 重启完成！
