export function createWhyPage() {
    const parentElement = document.getElementById('whyContent');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = 'Why To Choose Us';
    
    const paragraphDiv = document.createElement('div');
    paragraphDiv.classList.add('paragraph');
    paragraphDiv.innerHTML = `
        "At our pizza restaurant, we take pride in crafting the most delicious and authentic
        pizzas that cater to all tastes and cravings.<br> Our commitment to using the freshest, high-quality ingredients
        ensures every bite is a burst of flavor.<br><br>Whether you're seeking classic favorites or daring new
        combinations, our diverse menu has something for everyone.<br><br>Our welcoming atmosphere is perfect for
        gatherings with family and friends, and our prompt service ensures you'll savor every slice while it's hot
        and fresh.<br><br>Choose us for a memorable pizza experience that satisfies your palate and brings joy to
        your dining moments."
    `;
    
    parentElement.appendChild(titleDiv);
    parentElement.appendChild(paragraphDiv);
    
    
    
    
    
    

}