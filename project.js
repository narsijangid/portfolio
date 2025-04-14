// Project Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    const popup = document.querySelector('.project-popup');
    const popupClose = document.querySelector('.popup-close');
    const popupTitle = document.querySelector('.popup-title');
    const contributorsList = document.querySelector('.contributors-list');

    // Sample project data (replace with your actual project data)
    const projects = [
        {
            title: 'E-commerce Website',
            skills: ['HTML', 'CSS', 'JavaScript', 'firebase'],
            contributors: [
                { 
                    name: ' Narsi Jangid', 
                    github: '@narsijangid',
                    image: 'https://avatars.githubusercontent.com/u/149683470?v=4'
                },
                { 
                    name: 'suraj', 
                    github: '@SuRaJ02kaiser',
                    image: 'https://avatars.githubusercontent.com/u/181089838?v=4'
                },
                { 
                    name: 'Avijit Ghosh', 
                    github: '@Avi7877489',
                    image: 'https://avatars.githubusercontent.com/u/150539120?v=4'
                }
            ]
        },
        {
            title: 'E-commerce website',
            skills: ['html', 'css', 'js', 'Firebase'],
            contributors: [
                { 
                    name: 'Narsi jangid', 
                    github: '@narsijangid',
                    image: 'https://avatars.githubusercontent.com/u/149683470?s=64&v=4'
                },
                { 
                    name: 'Smith Bemal', 
                    github: '@smith-bimal',
                    image: 'https://avatars.githubusercontent.com/u/119521377?v=4'
                },
                { 
                    name: 'Sai Suman Maharana', 
                    github: '@oSai9951',
                    image: 'https://avatars.githubusercontent.com/u/143515005?v=4'
                }
            ]
        },
        {
            title: 'Weather Dashboard',
            skills: ['HTML', 'CSS', 'JavaScript'    ],
            contributors: [
                { 
                    name: 'Narsi jangid', 
                    github: '@narsijangid',
                    image: 'https://avatars.githubusercontent.com/u/149683470?v=4'
                }
            ]
        }
    ];

    // Add click event to each project card
    projectCards.forEach((card, index) => {
        // Add click event to the card content (excluding the Live URL button)
        const cardContent = card.querySelector('.project-content');
        if (cardContent) {
            cardContent.addEventListener('click', (e) => {
                e.preventDefault();
                const project = projects[index];
                showProjectPopup(project);
                
                // Store current scroll position
                const scrollPosition = window.scrollY;
                
                // Show popup
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Restore scroll position
                window.scrollTo(0, scrollPosition);
            });
        }

        // Add click event to the image
        const cardImage = card.querySelector('.project-image');
        if (cardImage) {
            cardImage.addEventListener('click', (e) => {
                e.preventDefault();
                const project = projects[index];
                showProjectPopup(project);
                
                // Store current scroll position
                const scrollPosition = window.scrollY;
                
                // Show popup
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Restore scroll position
                window.scrollTo(0, scrollPosition);
            });
        }
    });

    // Function to show project popup
    function showProjectPopup(project) {
        popupTitle.textContent = project.title;
        
        // Clear existing content
        contributorsList.innerHTML = '';
        
        // Add skills section
        const skillsSection = document.createElement('div');
        skillsSection.className = 'project-skills';
        skillsSection.innerHTML = `
            <h4>Skills Used:</h4>
            <div class="skills-tags">
                ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        contributorsList.appendChild(skillsSection);
        
        // Add contributors section
        const contributorsSection = document.createElement('div');
        contributorsSection.className = 'contributors-section';
        contributorsSection.innerHTML = '<h4>Contributors:</h4>';
        contributorsList.appendChild(contributorsSection);
        
        // Add contributors to the list
        project.contributors.forEach(contributor => {
            const contributorItem = document.createElement('li');
            contributorItem.className = 'contributor-item';
            contributorItem.innerHTML = `
                <img src="${contributor.image}" alt="${contributor.name}" class="contributor-popup-avatar">
                <i class='bx bxl-github'></i>
                <div class="contributor-info">
                    <span class="contributor-name">${contributor.name}</span>
                    <span class="contributor-github">${contributor.github}</span>
                </div>
            `;
            contributorsList.appendChild(contributorItem);
        });
    }

    // Close popup when clicking the close button
    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close popup when clicking outside the content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Animation on scroll
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

    // Observe all project cards
    document.querySelectorAll('.animate-projects').forEach(el => {
        observer.observe(el);
    });
}); 