/**
 * 
 * @param {string} elementId The element to "track".
 * @param {string} classToApply The class to apply to the element.
 */
function animateOnView(elementId, classToApply) {
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add(classToApply);
            }
        });
    });
    observer.observe(document.getElementById(elementId));
}

animateOnView("rawg-integration", "slideInUp");
animateOnView("dark-theme", "slideInUp");
animateOnView("multiple-views", "slideInUp");
animateOnView("languages", "slideInUp");
animateOnView("import-export", "slideInUp");
animateOnView("favorite-bar", "slideInUp");
