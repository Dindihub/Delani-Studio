let el = document.getElementById("design-caption");
let el2 = document.getElementById("development-caption");
let el3 = document.getElementById("product-caption")

el.addEventListener('click', (e) => {

    document.getElementById('paragraph-design').style.display = "block";

});

el2.addEventListener('click', (e) => {

    document.getElementById('para-development').style.display = "block";

});

el3.addEventListener('click', (e) => {

    document.getElementById('para-product').style.display = "block";

});