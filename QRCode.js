const wrapper = document.querySelector('.wrapper'),
Input=wrapper.querySelector('.form input'),
qrImage=wrapper.querySelector('.qr-code img'),
generatebtn=wrapper.querySelector('.form button');

generatebtn.addEventListener('click',()=>{
let qrValue=Input.value;
if (!qrValue)return;
generatebtn.innerText='Generating QR Code...'

qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
qrImage.addEventListener('load',()=>{
    wrapper.classList.add("active");
    generatebtn.innerText="Generate QR Code";
})

});

Input.addEventListener('keyup',()=>{
    if(!Input.value)
    wrapper.classList.remove("active")
})

// NavBar...
const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activeLink));


// samePage
// const pageLinks = document.querySelectorAll('.Profile');
// pageLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent the default link behavior

//         // Fetch the content of the linked page
//         fetch(link.href)
//             .then(response => response.text())
//             .then(html => {
//                 // Replace the content of the #content div with the fetched HTML
//                 document.getElementById('content').innerHTML = html;
//             })
//             .catch(error => console.error(error));
//     });
// });

window.toTransitionPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})