// Event listener for showing the projects section when link is clicked
document.getElementById('showProjects').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const projectsSection = document.getElementById('projects');
    
    // Show the projects section by removing 'hidden' class
    projectsSection.classList.remove('hidden');
    
    // Trigger opacity transition for smooth fade-in
    setTimeout(function() {
        projectsSection.classList.remove('opacity-0');
    }, 50); 
});
