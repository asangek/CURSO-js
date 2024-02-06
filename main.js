

let titulo = document.getElementById("titulo")

titulo.innerHTML = "<h1>PC COMPONENTES</h1> "

let cart = [];

function getCartFromLocalStorage() {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
        cart = JSON.parse(cartFromStorage);
        renderCart();
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    saveCartToLocalStorage();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    renderCart();
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Eliminar';
        removeButton.addEventListener('click', () => removeFromCart(index));
        itemElement.innerText = `${item.name} - $${item.price}`;
        itemElement.appendChild(removeButton);
        cartElement.appendChild(itemElement);
        total += item.price;
    });

    const totalElement = document.createElement('div');
    totalElement.innerText = `Total: $${total}`;
    cartElement.appendChild(totalElement);
}

getCartFromLocalStorage();

btn.addEventListener("click", function() {

    let nombre= prompt ("Nombre:")
    let tarea= prompt ("Qué te gustaria?")
const newcard =document.createElement ("div")

newcard.innerHTML = `

<h2> El usuario:  ${nombre}   </h2>
<p>    ${tarea} </p>
`
container.appendChild (newcard)
})


























