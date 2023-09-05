export function createRestaurantPage() {
    document.addEventListener('DOMContentLoaded', () => {
        const contentDiv = document.getElementById('homeContent');

        const homeBody = document.createElement('div');
        homeBody.id = 'homeBody';

        const restaurantDetails = document.createElement('div');
        restaurantDetails.classList.add('restaurant-details');

        const restaurantHeading = document.createElement('h1');
        restaurantHeading.classList.add('restaurant-heading'); 
        restaurantHeading.innerHTML = 'The   Tastiest &<br><span class="best-pizza">Best Pizza</span> In The <br>World';
        restaurantDetails.appendChild(restaurantHeading);

        const restaurantDescription = document.createElement('p');
        restaurantDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt ut labore .<br>Ut enim ad minim veniam, quis nostrud exercitation.';
        restaurantDescription.classList.add('restaurant-description');
        restaurantDetails.appendChild(restaurantDescription);

        homeBody.appendChild(restaurantDetails);

        const viewMenuButton = document.createElement('button');
        viewMenuButton.textContent = 'View Menu';
        viewMenuButton.id = 'viewMenuButton';
        restaurantDetails.appendChild(viewMenuButton);

        homeBody.appendChild(restaurantDetails);
        contentDiv.appendChild(homeBody);

        const restaurantImageContainer = document.createElement('div');
        restaurantImageContainer.classList.add('restaurant-image-container');

        homeBody.appendChild(restaurantImageContainer);
    });
}