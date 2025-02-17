document.addEventListener("DOMContentLoaded", function () {
    let plusButtons = document.querySelectorAll(".plus_btn");

    plusButtons.forEach(button => {
        button.addEventListener("click", function () {
            let card = this.closest(".card_item");
            let foodName = card.querySelector(".food_name").innerText;
            let foodPrice = card.querySelector(".food_info").innerText;

            let quantity = prompt(`${foodName} dan nechta zakaz qilmoqchisiz?`, "1");

            if (quantity && !isNaN(quantity) && quantity > 0) {
                let totalPrice = parseInt(quantity) * parseInt(foodPrice.replace(/\D/g, ""));

                let confirmOrder = confirm(`${quantity} ta ${foodName} jami narxi ${totalPrice} sum\nMahsulotni zakaz qilasizmi?`);

                if (confirmOrder) {
                    alert("Zakaz qabul qilindi");
                } else {
                    alert("Zakaz bekor qilindi");
                }
            } else {
                alert("Noto‘g‘ri miqdor kiritildi!");
            }
        });
    });
});
