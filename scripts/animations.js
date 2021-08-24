/**
 * 
 * @param {string} elementId The element to "track".
 * @param {string[]} classesToApply The class to apply to the element.
 */
function animateOnView(elementId, classesToApply) {
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                for (let i = 0; i < classesToApply.length; i++) {
                    entry.target.classList.remove("opacity-0");
                    entry.target.classList.add(classesToApply[i]);
                }
            }
        });
    });
    observer.observe(document.getElementById(elementId));
}

animateOnView("card-view", ["slideInUp", "fadeIn"]);
animateOnView("recent-view", ["slideInUp", "fadeIn"]);
animateOnView("list-view", ["slideInUp", "fadeIn"]);
animateOnView("about-details", ["slideInUp", "fadeIn"]);
animateOnView("ratings-details", ["slideInUp", "fadeIn"]);
animateOnView("achievement-details", ["slideInUp", "fadeIn"]);
