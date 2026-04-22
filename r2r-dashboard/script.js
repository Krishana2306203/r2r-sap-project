document.addEventListener('DOMContentLoaded', () => {
    // Add simple click interactions for sidebar
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });

    console.log("SAP R2R Dashboard Loaded");
});
