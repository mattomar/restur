export function createLocationPage() {
    const locationContent = document.getElementById('locationContent');

    if (!locationContent) {
        console.error("Element with ID 'locationContent' not found.");
        return;
    }

    const locationHtml = `
        <h2 class="location-title">Our Location</h2>
        <div class="location-info">
            <p>Address: 123 Main Street</p>
            <p>City: Your City</p>
            <p>State: Your State</p>
            <p>ZIP Code: 12345</p>
        </div>
    `;

    locationContent.innerHTML = locationHtml;
}