const target = document.getElementById("circle");
const viewbox = document.getElementById("boxes");


target.addEventListener('click', function(){
    var X = Math.random() * viewbox.offsetWidth
    var Y = Math.random() * viewbox.offsetHeight 

    target.style.left = X + "px";
    target.style.top = Y + "px";
})