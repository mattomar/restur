export function createLocationPage() {
    const locationContent = document.getElementById('locationContent');



    const locationHtml = `
        <h2 class="location-title">Our Location</h2>
        <div class="location-info">
            <p>Address: 123 Main Street</p>
            <p>City: Indonesia</p>
            <p>State: Sukabumi</p>
            <p>ZIP Code: 12345</p>
        </div>
    `;

    locationContent.innerHTML = locationHtml;
}