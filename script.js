// Function to check if it's Wednesday
function isWednesday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    // Check if it's Wednesday
    // 0 = Sunday, 1 = Monday, ..., 3 = Wednesday, ..., 6 = Saturday
    return (dayOfWeek === 3) 
}

// Function to update the page content and styles
function updatePage() {
    const heading = document.querySelector('h1');
    const body = document.querySelector('body');
    if (isWednesday()) {
        heading.textContent = 'YES';
        body.className = 'light';
    } else {
        heading.textContent = 'NO';
        body.className = 'dark';
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updatePage);

// Function to update the page dynamically at midnight
function updateAtMidnight() {
    const now = new Date();
    const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;

    setTimeout(() => {
        updatePage();
        updateAtMidnight(); // Schedule the next update
    }, timeUntilMidnight);
}

// Start the midnight update process
updateAtMidnight();