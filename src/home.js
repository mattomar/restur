export function createRestaurantPage() {
    document.addEventListener('DOMContentLoaded', () => {
        const contentDiv = document.getElementById('content');

        // Create and append the ul list to homeTabs
        const ul = document.createElement('ul');

        const homeTab = document.createElement('li');
        homeTab.textContent = 'Home';
        ul.appendChild(homeTab);

        const whyFoodTab = document.createElement('li');
        whyFoodTab.textContent = 'Why Food';
        ul.appendChild(whyFoodTab);

        const menuTab = document.createElement('li');
        menuTab.textContent = 'Menu';
        ul.appendChild(menuTab);

        const locationTab = document.createElement('li');
        locationTab.textContent = 'Location';
        ul.appendChild(locationTab);

        // Create a div for homeTabs and append the ul
        const homeTabsDiv = document.createElement('div');
        homeTabsDiv.id = 'homeTabs';
        homeTabsDiv.appendChild(ul);

        contentDiv.appendChild(homeTabsDiv);

        // Create a div for homeBody
        const homeBody = document.createElement('div');
        homeBody.id = 'homeBody';

        const restaurantImageContainer = document.createElement('div');
        restaurantImageContainer.classList.add('restaurant-image-container'); // Add a class for styling
        
        homeBody.appendChild(restaurantImageContainer);

        // Create and append the restaurant heading
        const restaurantHeading = document.createElement('h1');
        restaurantHeading.textContent = 'Our Wonderful Restaurant';
        homeBody.appendChild(restaurantHeading);

        // Create and append the restaurant description
        const restaurantDescription = document.createElement('p');
        restaurantDescription.textContent = 'Welcome to our restaurant! We serve delicious food in a cozy atmosphere.';
        homeBody.appendChild(restaurantDescription);

        // Append homeBody to contentDiv
        contentDiv.appendChild(homeBody);
    });
}