import { createRestaurantPage } from './home';
import { createWhyPage } from './why';


createRestaurantPage();
createWhyPage();






function showHomeContent() {
    const homeContent = document.getElementById('homeContent');
    const whyContent = document.getElementById('whyContent');

    homeContent.style.display = 'block'; // Show home content
    whyContent.style.display = 'none';   // Hide why content
}

// Function to show the why content
function showWhyContent() {
    const homeContent = document.getElementById('homeContent');
    const whyContent = document.getElementById('whyContent');

    homeContent.style.display = 'none';   
    whyContent.style.display = 'block';  
}

document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.querySelector('li[data-type-target="#homeContent"]');
    const whyTab = document.querySelector('li[data-type-target="#whyContent"]');

    // Initially, show the home content and hide the why content
    showHomeContent();

    // Add click event listeners to the tabs
    homeTab.addEventListener('click', showHomeContent);
    whyTab.addEventListener('click', showWhyContent);
});
