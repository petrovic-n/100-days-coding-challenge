document.addEventListener('DOMContentLoaded', function () {
    let watchButton = document.querySelectorAll('.add-to-cart');
    let priceSpan = document.getElementById('total-price');
    let resetButton = document.querySelector('#reset-btn');
    let totalPrice = 0;

    watchButton.forEach((button) => {
        button.addEventListener('click', function () {
            if(!button.disabled) {
                let price = parseInt(button.getAttribute('data-price'));
                totalPrice += price;
                priceSpan.textContent = totalPrice;


                // Disable button
                button.disabled = true;
                button.textContent = 'Watched';
                button.style.backgroundColor = 'red';
                button.style.cursor = 'default';
            }
        });
    });


resetButton.addEventListener('click', function () {
    // reset total price and enable buttons
    totalPrice = 0;
    priceSpan.textContent = totalPrice;
    watchButton.forEach((button) => {
        button.disabled = false;
        button.textContent = 'Watch';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#0345fc';
        });
    });
});

