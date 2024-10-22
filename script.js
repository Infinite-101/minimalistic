
    document.addEventListener('DOMContentLoaded', function() {
        // Scroll-triggered animations for .content elements
        const contentElements = document.querySelectorAll('.content h1, .content p, .content ul');
        const goals = document.querySelectorAll('.goal'); // Select goal links for modal
        const modal = document.getElementById('goalModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const closeModal = document.querySelector('.close');

        // Function to check if an element is in the viewport (for content animation)
        function checkVisibleSections() {
            const windowHeight = window.innerHeight;

            contentElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    element.classList.add('active'); // Trigger animation
                } else {
                    element.classList.remove('active'); // Reset animation if out of view
                }
            });
        }

        // Check visibility on scroll
        window.addEventListener('scroll', checkVisibleSections);
        checkVisibleSections(); // Initial check on page load

        // Modal functionality to show goal details
        goals.forEach(goal => {
            goal.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent the default anchor behavior
                const goalData = this.dataset.goal; // Get goal data
                modalTitle.innerText = goalData; // Set modal title
                modalDescription.innerText = `Details about ${goalData}.`; // Set modal description
                modal.style.display = "block"; // Show modal
            });
        });

        // Close modal on clicking the close button
        closeModal.onclick = function() {
            modal.style.display = "none"; // Hide modal
        };

        // Close modal if clicked outside of it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none"; // Hide modal on outside click
            }
        };

        // New scroll animation effect using Intersection Observer for sections
        const sections = document.querySelectorAll('.hero-text, .benefits, .progress, .cta-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // Add active class for scroll animation
                } else {
                    entry.target.classList.remove('active'); // Remove active class when out of view
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section); // Observe each section for intersection events
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const contentElements = document.querySelectorAll('.answer');
    
        // Function to check if an element is in the viewport
        function checkVisibleSections() {
            const windowHeight = window.innerHeight;
    
            contentElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        }
    
        // Check visibility on scroll
        window.addEventListener('scroll', checkVisibleSections);
        checkVisibleSections(); // Initial check
    });
    
