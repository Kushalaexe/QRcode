const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activeLink));


document.addEventListener("DOMContentLoaded", function () {
    const Links = document.querySelectorAll(".link");
    Links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = event.currentTarget.getAttribute("href");
            document.body.classList.add("fade-out");
            setTimeout(function () {
                window.location.href = targetPage;
            }, 500); 
        });
    });
});
