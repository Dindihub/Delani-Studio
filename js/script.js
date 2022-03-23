// toggle paragraph on what to do section
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

// overlay on portfolio section
let images = document.querySelectorAll(".portfolio")
let overlay = document.querySelectorAll(".overlay")
for (let i = 0; i <= images.length; i++) {
    images[i].addEventListener("mouseover", (e) => {
        overlay[i].style.display = "block"
    })
    images[i].addEventListener("mouseout", (e) => {
        overlay[i].style.display = "none"
    });
}

// validate form

let oneForm=document.getElementById("form").addEventListener('click', e => {
e.preventDefault();
alert("Your form has been submitted")
});