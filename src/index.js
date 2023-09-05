import { createRestaurantPage } from './home';
import { createWhyPage } from './why';
import { createMenuPage } from './menu';
import { createLocationPage } from './location';

createRestaurantPage();
createWhyPage();
createMenuPage();
createLocationPage();





function showContent(tabId) {
    const contentSections = ['homeContent', 'whyContent', 'menuContent', 'locationContent'];

    contentSections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        section.style.display = sectionId === tabId ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('li[data-type-target]');

    // Initially, show the home content and hide the other sections
    showContent('homeContent');

    // Add click event listeners to the tabs
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', () => {
            const tabId = tabLink.getAttribute('data-type-target').substring(1); // Remove the '#' symbol
            showContent(tabId);
        });
    });
});






