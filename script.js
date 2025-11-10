//Daunevin, 1-55, could change

function glick1Macros() {
    const button1 = document.getElementById("macros1")

    button1.addEventListener("click", () => {
            alert("Calories - 290 \n Protien - 11g \n Carbohydates - 24g \n Fat - 17g \n Saturated Fat - 7g \n Fiber - 1g \n Sugar - 3g \n Sodium - 850mg")

    })
}

function glick2Macros() {
    const button2 = document.getElementById("macros2")

    button2.addEventListener("click", () => {
            alert("Calories - 500 \n Protien - 20g \n Carbohydates - 35g \n Fat - 30g \n Saturated Fat - 11g \n Fiber - 2g \n Sugar - 6g \n Sodium - 1300mg")

    })
}

function glick3Macros() {
    const button3 = document.getElementById("macros3")

    button3.addEventListener("click", () => {
            alert("Calories - 400 \n Protien - 17g \n Carbohydates - 24g \n Fat - 25g \n Saturated Fat - 10g \n Fiber - 1g \n Sugar - 3g \n Sodium - 1000mg")

    })
}

function glick4Macros() {
    const button4 = document.getElementById("macros4")

    button4.addEventListener("click", () => {
            alert("Calories - 500 \n Protien - 19g \n Carbohydates - 34g \n Fat - 30g \n Saturated Fat - 11g \n Fiber - 2g \n Sugar - 4g \n Sodium - 1300mg")

    })
}

function glick5Macros() {
    const button5 = document.getElementById("macros5")

    button5.addEventListener("click", () => {
            alert("Calories - 460 \n Protien - 20g \n Carbohydates - 30g \n Fat - 30g \n Saturated Fat - 11g \n Fiber - 2g \n Sugar - 4g \n Sodium - 1100mg")

    })
}

function glick6Macros() {
    const button6 = document.getElementById("macros6")

    button6.addEventListener("click", () => {
            alert("Calories - 305 \n Protien - 11g \n Carbohydates - 30g \n Fat - 15g \n Saturated Fat - 7g \n Fiber - 1g \n Sugar - 3g \n Sodium - 850mg")

    })
}

// 57-116 Joel

function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ name, price, image });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
}

const cartContainer = document.getElementById('cartContainer');


function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(div);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalDiv = document.createElement('div');
    totalDiv.style.marginTop = "1rem";
    totalDiv.style.fontSize = "1.2rem";
    totalDiv.style.color = "brown";
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalDiv);
}


function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); 
}

renderCart();

window.addEventListener('storage', function(event) {
    if (event.key === 'cart') {
        renderCart();
    }
});