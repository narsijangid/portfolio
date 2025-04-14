document.addEventListener('DOMContentLoaded', function() {
    // Generate random contribution data for the calendar
    function generateRandomContributions() {
        const contributions = [];
        const currentDate = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

        for (let date = oneYearAgo; date <= currentDate; date.setDate(date.getDate() + 1)) {
            // Generate random contribution level (0-4)
            const level = Math.floor(Math.random() * 5);
            contributions.push({
                date: new Date(date),
                level: level
            });
        }

        return contributions;
    }

    // Render the contribution calendar
    function renderCalendar() {
        const calendarGrid = document.querySelector('.calendar-grid');
        const contributions = generateRandomContributions();

        contributions.forEach(contribution => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            if (contribution.level > 0) {
                dayElement.setAttribute('data-level', contribution.level);
            }
            calendarGrid.appendChild(dayElement);
        });
    }

    // Initialize the calendar
    renderCalendar();

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Observe all stat cards
    document.querySelectorAll('.stat-card').forEach(el => {
        observer.observe(el);
    });
}); 