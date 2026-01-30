@echo off
echo [ZTA] Starting automated setup...
set "PATH=%PATH%;C:\Program Files\nodejs"
echo [ZTA] Checking Node.js...
node -v
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found.
    exit /b 1
)

echo [ZTA] Installing Server Dependencies...
cd server
if exist package.json (
    call npm install
) else (
    echo [ERROR] server/package.json not found.
)
cd ..

echo [ZTA] Installing Client Dependencies...
if exist package.json (
    call npm install
) else (
    echo [ERROR] package.json not found.
)

echo [ZTA] Setup Complete.
