
$(document).ready(function() {
    var productList = $("#product-list");
    fetchProducts(function (products) {
        productList.empty();
        products.forEach(function(product) {
            productList.append(createProductCard(product));
        });
    });
});