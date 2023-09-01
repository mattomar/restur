export function createRestaurantPage() {
    document.addEventListener('DOMContentLoaded', () => {
        const contentDiv = document.getElementById('content');

        

        // Create a div for homeBody
        const homeBody = document.createElement('div');
        homeBody.id = 'homeBody';

      

        const restaurantDetails = document.createElement('div');
        restaurantDetails.classList.add('restaurant-details');

        const restaurantHeading = document.createElement('h1');
        restaurantHeading.classList.add('restaurant-heading'); 
        restaurantHeading.innerHTML = 'The   Tastiest &<br><span class="best-pizza">Best Pizza</span> In The <br>World'; // Use innerHTML for line breaks
        restaurantDetails.appendChild(restaurantHeading);

        const restaurantDescription = document.createElement('p');
        restaurantDescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt ut labore .<br>Ut enim ad minim veniam, quis nostrud exercitation.';
        restaurantDescription.classList.add('restaurant-description'); // Add the "restaurant-description" class
        restaurantDetails.appendChild(restaurantDescription);

        
        homeBody.appendChild(restaurantDetails);



        // Create and append the view menu button
        const viewMenuButton = document.createElement('button');
        viewMenuButton.textContent = 'View Menu';
        viewMenuButton.id = 'viewMenuButton'; // Add an ID for styling or interaction
        restaurantDetails.appendChild(viewMenuButton);

        // Append the button container to homeBody
        homeBody.appendChild(restaurantDetails);

        // Append homeBody to contentDiv
        contentDiv.appendChild(homeBody);

        const restaurantImageContainer = document.createElement('div');
        restaurantImageContainer.classList.add('restaurant-image-container'); // Add a class for styling

        homeBody.appendChild(restaurantImageContainer);
    });
}

