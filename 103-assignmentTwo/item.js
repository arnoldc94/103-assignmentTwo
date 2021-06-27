
    let item = (prompt("Enter the name of item."));
    let quantity = Number(prompt("Enter the quantity of the item."));
    let price = Number(prompt("Enter the price of the item."));

    var noTax= quantity*price;
    var tax= noTax*0.16;
    var totalPrice=tax+noTax;
    document.write(`item: ${item} <br>
                    quantity: ${quantity} <br>
                    price: ${price} <br>
                    Cost with tax: ${totalPrice}`);


