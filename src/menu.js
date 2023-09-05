export function createMenuPage() {
    const menuContent = document.getElementById('menuContent');


    const menuHtml = `
        <div class="menuTitle">Menu</div>
        <div class="cardscontain">
            <div class="cardcontiner">
                <div class="card" id="hawaii">
                    <h3 class="menu-item-name">Hawaiian pizza</h3>
                    <div class="imageContain"></div>
                    <p class="menu-item-price">$10.99</p>
                </div>
            </div>
            <div class="cardcontiner">
                <div class="card" id="veg">
                    <h3 class="menu-item-name">Vegetarian pizza</h3>
                    <div class="imageContain"></div>
                    <p class="menu-item-price">$10.99</p>
                </div>
            </div>
            <div class="cardcontiner">
                <div class="card" id="pep">
                    <h3 class="menu-item-name">Pepperoni pizza</h3>
                    <div class="imageContain"></div>
                    <p class="menu-item-price">$10.99</p>
                </div>
            </div>
            <div class="cardcontiner">
                <div class="card" id="cheese">
                    <h3 class="menu-item-name">Cheese pizza</h3>
                    <div class="imageContain"></div>
                    <p class="menu-item-price">$10.99</p>
                </div>
            </div>
        </div>
    `;

    // Append the menu HTML to the menuContent element
    menuContent.innerHTML = menuHtml;
}