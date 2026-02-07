document.addEventListener('DOMContentLoaded', () => {
    // 1. Countdown Logic
    const countdownEl = document.getElementById('countdown');
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownEl.innerText = "00:00:00:00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownEl.innerText = 
            `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // 2. Gamified Waitlist Mock
    const waitlistBtn = document.getElementById('join-btn');
    const waitlistInput = document.getElementById('email-input');
    const countEl = document.getElementById('waitlist-count');
    let count = 14209;

    // Simulate live updates
    setInterval(() => {
        if (Math.random() > 0.7) {
            count += Math.floor(Math.random() * 3) + 1;
            updateCountDisplay();
        }
    }, 2000);

    function updateCountDisplay() {
        countEl.innerText = `Pos: #${count.toLocaleString()}`;
    }

    waitlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = waitlistInput.value;
        if (email && email.includes('@')) {
            waitlistBtn.innerText = "ACCESS GRANTED";
            waitlistBtn.style.background = "var(--accent-primary)";
            waitlistBtn.style.color = "#000";
            countEl.innerText = "Pos: #1 (Priority)";
            countEl.style.color = "var(--accent-primary)";
        } else {
            waitlistInput.style.borderColor = "red";
            setTimeout(() => waitlistInput.style.borderColor = "#333", 1000);
        }
    });

    updateCountDisplay();

    // 3. Kinetic Type Interaction
    const kineticText = document.querySelector('.kinetic-type');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        kineticText.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});
