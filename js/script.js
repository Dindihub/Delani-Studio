// toggle paragraph on what to do section
let el = document.getElementById("design-caption");
let el2 = document.getElementById("development-caption");
let el3 = document.getElementById("product-caption")

el.addEventListener('mouseover', (e) => {
document.getElementById('paragraph-design').style.display = "block";
});
el.addEventListener('mouseout', (e) => {
document.getElementById('paragraph-design').style.display = "";
});


el2.addEventListener('mouseover', (e) => {
document.getElementById('para-development').style.display = "block";
});
el2.addEventListener('mouseout', (e) => {
document.getElementById('para-development').style.display = "";
});

el3.addEventListener('mouseover', (e) => {
document.getElementById('para-product').style.display = "block";
});
el3.addEventListener('mouseout', (e) => {
document.getElementById('para-product').style.display = "";
});

// overlay on portfolio section
let images = document.querySelectorAll(".portfolio")
let overlay = document.querySelectorAll(".overlay")
for (let i = 0; i <= images.length; i++) {
    images[i].addEventListener("mouseover", e => {
        overlay[i].style.display = "block"
    })
    images[i].addEventListener("mouseout", e => {
        overlay[i].style.display = ""
    });
}

// validate form

let form = document.querySelector("#form");
    form.addEventListener("submit", e => {
        document.getElementById("demo").innerHTML = "Your details have been submitted";

        // alert("Your details have been submitted");
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
    

    clearInputFields();
});