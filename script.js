document.getElementById("calculatePrice").addEventListener("click", function() {
    var selectedProduct = document.getElementById("productSelect").value;
    var expiryDate = new Date(document.getElementById("expiryDate").value);
    var currentDate = new Date();

    // Define MRP and original price for each product
    var mrp = {
        bread: 50,
        paneer: 100,
        butter: 80,
        cheese: 120,
        ghee: 200
    };

    // Calculate days until expiry
    var daysUntilExpiry = Math.ceil((expiryDate - currentDate) / (1000 * 60 * 60 * 24));

    // Check if product has expired
    if (expiryDate < currentDate) {
        alert("Product has expired");
        return;
    }

    // Calculate new price based on expiry date
    var newPrice;
    switch (daysUntilExpiry) {
        case 1:
            newPrice = mrp[selectedProduct] * 0.5; // Decrease price by 50%
            break;
        case 2:
            newPrice = mrp[selectedProduct] * 0.55; // Decrease price by 45%
            break;
        case 3:
            newPrice = mrp[selectedProduct] * 0.60; // Decrease price by 40%
            break;
        case 4:
            newPrice = mrp[selectedProduct] * 0.67; // Decrease price by 33%
            break;
        case 5:
            newPrice = mrp[selectedProduct] * 0.75; // Decrease price by 25%
            break;
        case 6:
            newPrice = mrp[selectedProduct] * 0.80; // Decrease price by 20%
            break;
        case 7:
            newPrice = mrp[selectedProduct] * 0.84; // Decrease price by 16%
            break;
        case 8:
            newPrice = mrp[selectedProduct] * 0.86; // Decrease price by 14%
            break;
        case 9:
            newPrice = mrp[selectedProduct] * 0.89; // Decrease price by 11%
            break;
        case 10:
            newPrice = mrp[selectedProduct] * 0.90; // Decrease price by 10%
            break;
        case 11:
            newPrice = mrp[selectedProduct] * 0.93; // Decrease price by 7%
            break;
        case 12:
            newPrice = mrp[selectedProduct] * 0.94; // Decrease price by 6%
            break;
        case 13:
            newPrice = mrp[selectedProduct] * 0.945; // Decrease price by 5.5%
            break;
        case 14:
            newPrice = mrp[selectedProduct] * 0.95; // Decrease price by 5%
            break;
        case 15:
            newPrice = mrp[selectedProduct] * 0.96; // Decrease price by 4%
            break;
        default:
            newPrice = mrp[selectedProduct]; // No discount for more than 15 days remaining
    }

    // Display original MRP and new price
    var originalMrpElement = document.getElementById("originalMrp");
    var newPriceElement = document.getElementById("newPrice");

    originalMrpElement.textContent = "Original MRP of " + selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1) + ": Rs. " + mrp[selectedProduct];
    newPriceElement.textContent = "The new price of " + selectedProduct.charAt(0).toUpperCase() + selectedProduct.slice(1) + " is Rs. " + newPrice.toFixed(2);
});
