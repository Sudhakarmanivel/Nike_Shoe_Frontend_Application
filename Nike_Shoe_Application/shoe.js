// 1. Product "Add to Cart" Alert
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Item added to cart 🛒");
    });
});


// 2. Wishlist (Heart icon toggle)
document.querySelectorAll('.fa-heart').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('active');
        this.style.color = this.classList.contains('active') ? 'red' : 'black';
    });
});


// 3. Image Gallery Function
function functio(small){
    let full = document.getElementById("imagebox");
    full.src = small.src;
}


// 4. Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 5. Login Form Validation
document.querySelector("form").addEventListener("submit", function(e){
    let username = document.querySelector(".username").value;
    let password = document.querySelector("input[name='password']").value;

    if(username === "" || password === ""){
        e.preventDefault();
        alert("Please fill all fields!");
    } else {
        alert("Login Successful ✅");
    }
});


// 6. Cart Counter
let count = 0;
const cartIcon = document.querySelector('.fa-cart-shopping');

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        count++;
        cartIcon.setAttribute("data-count", count);
    });
});


// 7. Newsletter Subscribe
document.querySelector(".search_bar button").addEventListener("click", function(){
    let email = document.querySelector(".search_bar input").value;

    if(email === ""){
        alert("Enter your email!");
    } else {
        alert("Subscribed successfully 📩");
    }
});