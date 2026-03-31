/* Two Birds Innovation — Site JS */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile nav toggle
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
            });
        });
    }

    // Animated counters on scroll
    var counters = document.querySelectorAll('.counter-card');
    var animated = false;

    function animateCounters() {
        if (animated) return;
        var section = document.getElementById('results');
        if (!section) return;
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            animated = true;
            counters.forEach(function (card) {
                var target = parseInt(card.getAttribute('data-target'), 10);
                var numberEl = card.querySelector('.counter-number');
                if (!numberEl || isNaN(target)) return;
                var current = 0;
                var duration = 1500;
                var step = Math.max(1, Math.floor(target / (duration / 16)));
                var timer = setInterval(function () {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    numberEl.textContent = current;
                }, 16);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Check on load
});
