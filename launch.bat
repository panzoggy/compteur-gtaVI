@echo off
title GTA VI Countdown Launcher
color 0D

echo.
echo  ╔══════════════════════════════════════════════════════════════╗
echo  ║                                                              ║
echo  ║   ██████  ██████   █████  ███    ██ ███████ ████████         ║
echo  ║  ██      ██    ██ ██   ██ ████   ██ ██         ██            ║
echo  ║  ██      ██    ██ ███████ ██ ██  ██ █████      ██            ║
echo  ║  ██      ██    ██ ██   ██ ██  ██ ██ ██         ██            ║
echo  ║   ██████  ██████  ██   ██ ██   ████ ███████    ██            ║
echo  ║                                                              ║
echo  ║                    ████████  ██████  ██████                  ║
echo  ║                       ██    ██    ██ ██   ██                 ║
echo  ║                       ██    ██    ██ ██████                  ║
echo  ║                       ██    ██    ██ ██   ██                 ║
echo  ║                       ██     ██████  ██   ██                 ║
echo  ║                                                              ║
echo  ║                    COUNTDOWN LAUNCHER v1.0                   ║
echo  ║                                                              ║
echo  ╚═══════════════════════════════════════════════════════════════╝
echo.

set "PROJECT_DIR=%~dp0"
set "HTML_FILE=%PROJECT_DIR%index.html"

echo [INFO] Project directory: %PROJECT_DIR%
echo [INFO] Looking for: %HTML_FILE%
echo.

if exist "%HTML_FILE%" (
    echo [SUCCESS] Found index.html
    echo [INFO] Launching GTA VI Countdown in your default browser...
    echo.
    start "" "%HTML_FILE%"
    echo [INFO] Countdown opened successfully!
    echo.
    echo  Vice City awaits... 🌴
    echo.
) else (
    echo [ERROR] index.html not found!
    echo [ERROR] Please ensure all files are in the compteur directory.
    echo.
)

echo Press any key to close this window...
pause >nul