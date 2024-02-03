document.addEventListener("DOMContentLoaded", function () {
    const badges = document.querySelectorAll('.badge');

    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            const tooltipText = this.getAttribute('data-tooltip');
            showTooltip(tooltipText);
        });

        badge.addEventListener('mouseleave', function () {
            hideTooltip();
        });
    });

    function showTooltip(text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;

        document.body.appendChild(tooltip);
    }

    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }
});
