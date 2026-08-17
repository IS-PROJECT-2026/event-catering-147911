let cartCount = 0;

document.addEventListener("DOMContentLoaded", () => {

    const categoryButtons = document.querySelectorAll(".category-btn");
    const menuItems = document.querySelectorAll(".menu-item");
    const cartButtons = document.querySelectorAll(".cart-btn");
    const cartDisplay = document.getElementById("cart-count");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {

            categoryButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const category = button.dataset.category;

            menuItems.forEach(item => {
                if (category === "all" || item.dataset.category === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartDisplay.textContent = cartCount;

            button.textContent = "Added ✓";

            setTimeout(() => {
                button.textContent = "Add to Cart";
            }, 1000);
        });
    });

    console.log("EventEase menu catalogue loaded.");
});