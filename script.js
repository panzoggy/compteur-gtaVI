const RELEASE_DATE = new Date('2026-11-19T00:00:00').getTime();

const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    milliseconds: document.getElementById('milliseconds')
};

let animationFrameId = null;
let lastValues = { days: -1, hours: -1, minutes: -1, seconds: -1 };

function pad(num, length = 2) {
    return String(num).padStart(length, '0');
}

function updateDisplay(values, ms) {
    if (values.days !== lastValues.days) {
        elements.days.textContent = pad(values.days, 3);
        elements.days.classList.add('updating');
        setTimeout(() => elements.days.classList.remove('updating'), 300);
        lastValues.days = values.days;
    }
    if (values.hours !== lastValues.hours) {
        elements.hours.textContent = pad(values.hours);
        elements.hours.classList.add('updating');
        setTimeout(() => elements.hours.classList.remove('updating'), 300);
        lastValues.hours = values.hours;
    }
    if (values.minutes !== lastValues.minutes) {
        elements.minutes.textContent = pad(values.minutes);
        elements.minutes.classList.add('updating');
        setTimeout(() => elements.minutes.classList.remove('updating'), 300);
        lastValues.minutes = values.minutes;
    }
    if (values.seconds !== lastValues.seconds) {
        elements.seconds.textContent = pad(values.seconds);
        elements.seconds.classList.add('updating');
        setTimeout(() => elements.seconds.classList.remove('updating'), 300);
        lastValues.seconds = values.seconds;
    }

    elements.milliseconds.textContent = pad(ms, 3) + ' ms';
}

function calculateTimeRemaining() {
    const now = Date.now();
    const diff = RELEASE_DATE - now;

    if (diff <= 0) {
        return { finished: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000;

    return {
        finished: false,
        values: { days, hours, minutes, seconds },
        milliseconds
    };
}

function tick() {
    const result = calculateTimeRemaining();

    if (result.finished) {
        handleRelease();
        return;
    }

    updateDisplay(result.values, result.milliseconds);
    animationFrameId = requestAnimationFrame(tick);
}

function handleRelease() {
    cancelAnimationFrame(animationFrameId);

    document.body.classList.add('countdown-complete');

    elements.days.textContent = '000';
    elements.hours.textContent = '00';
    elements.minutes.textContent = '00';
    elements.seconds.textContent = '00';
    elements.milliseconds.textContent = 'RELEASED!';

    document.querySelector('.neon-text').textContent = 'GTA VI IS HERE';
    document.querySelector('.date-value').textContent = 'NOW AVAILABLE';

    triggerCelebration();
}

function triggerCelebration() {
    const colors = ['#ff006e', '#00f5d4', '#8338ec', '#ff9f1c'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        requestAnimationFrame(frame);
    })();

    const style = document.createElement('style');
    style.textContent = `
        @keyframes celebrationFlash {
            0%, 100% { filter: hue-rotate(0deg) brightness(1); }
            25% { filter: hue-rotate(90deg) brightness(1.2); }
            50% { filter: hue-rotate(180deg) brightness(1.3); }
            75% { filter: hue-rotate(270deg) brightness(1.2); }
        }
        .countdown-complete .logo {
            animation: celebrationFlash 2s linear infinite, logoGlow 1s ease-in-out infinite alternate !important;
        }
    `;
    document.head.appendChild(style);
}

function initConfetti() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js';
    script.onload = () => {
        window.confetti = confetti;
    };
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
    initConfetti();

    const result = calculateTimeRemaining();
    if (result.finished) {
        handleRelease();
    } else {
        updateDisplay(result.values, result.milliseconds);
        animationFrameId = requestAnimationFrame(tick);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            const result = calculateTimeRemaining();
            if (!result.finished) {
                updateDisplay(result.values, result.milliseconds);
                animationFrameId = requestAnimationFrame(tick);
            }
        }
    });
});

window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationFrameId);
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}