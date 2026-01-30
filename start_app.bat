@echo off
chcp 65001 > nul
echo ==========================================
echo          正在启动 智涂安 (ZTA)
echo ==========================================
echo.
set "PATH=%PATH%;C:\Program Files\nodejs"

echo [1/2] 启动后端服务 (Port 3000)...
start "ZTA Backend" /min cmd /c "cd server && npm run dev"

echo [2/2] 启动前端服务 (Port 5173)...
start "ZTA Frontend" cmd /c "npm run dev"

echo.
echo 服务启动中... 
echo 请保持打开的命令行窗口运行。
echo 访问地址: http://localhost:5173
echo.
