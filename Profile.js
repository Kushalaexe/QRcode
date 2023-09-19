const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activeLink));


window.toTransitionPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})