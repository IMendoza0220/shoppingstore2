
    // var productName = $("#productName").val().trim();
    // var productDepartment = $("#productDepartment").val().trim();
    // var productPrice = $("#productPrice").val().trim();
    // var productPic = $('#productPic').val().trim();


$(function(){
    
    $("#btnProductAdd").on("click", function(event) {

        event.preventDefault();
        
    var bodyForm = {
        productName: $("#productName").val(),
        productDepartment: $("#productDepartment").val(),
        productPrice: $("#productPrice").val(),
        productPic: $('#productPic').val()
    }

    $.ajax('/api/products', {
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: bodyForm
    }).then(function() {
        console.log('it went ok')
    })

        // addProduct(
        //     productName,
        //     productDepartment,
        //     productPrice,
        //     productPic,


        //     function (addedProduct) {
        //         alert("Added " + addedProduct.name + " to the database");
        //     }
        // );
    });

})