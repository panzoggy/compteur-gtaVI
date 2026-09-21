#!/usr/bin/env python3
"""
GTA VI Countdown Launcher
Opens the aesthetic countdown timer in the default web browser.
"""

import os
import sys
import webbrowser
from pathlib import Path


def print_banner():
    banner = r"""
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║   ██████  ██████   █████  ███    ██ ███████ ████████         ║
    ║  ██      ██    ██ ██   ██ ████   ██ ██         ██            ║
    ║  ██      ██    ██ ███████ ██ ██  ██ █████      ██            ║
    ║  ██      ██    ██ ██   ██ ██  ██ ██ ██         ██            ║
    ║   ██████  ██████  ██   ██ ██   ████ ███████    ██            ║
    ║                                                              ║
    ║                    ████████  ██████  ██████                  ║
    ║                       ██    ██    ██ ██   ██                 ║
    ║                       ██    ██    ██ ██████                  ║
    ║                       ██    ██    ██ ██   ██                 ║
    ║                       ██     ██████  ██   ██                 ║
    ║                                                              ║
    ║                    COUNTDOWN LAUNCHER v1.0                   ║
    ║                                                              ║
    ╚═══════════════════════════════════════════════════════════════╝
    """
    print(banner)


def main():
    print_banner()

    project_dir = Path(__file__).parent.absolute()
    html_file = project_dir / "index.html"

    print(f"[INFO] Project directory: {project_dir}")
    print(f"[INFO] Looking for: {html_file}")
    print()

    if html_file.exists():
        print("[SUCCESS] Found index.html")
        print("[INFO] Launching GTA VI Countdown in your default browser...")
        print()

        file_url = html_file.as_uri()
        webbrowser.open(file_url)

        print("[INFO] Countdown opened successfully!")
        print()
        print("  Vice City awaits... 🌴")
        print()
    else:
        print("[ERROR] index.html not found!")
        print("[ERROR] Please ensure all files are in the compteur directory.")
        print()
        sys.exit(1)


if __name__ == "__main__":
    main()