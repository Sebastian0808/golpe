var count = 0;
var palabras = document.querySelectorAll("span")

for (var i = 0; i < palabras.length; i++) {
    palabras[i].addEventListener("click", function(e) {
        if(e.target.style.color !== "#f6e492") {
            e.target.style.color = "#f6e492"
            count ++
            if(count === 72) {
                setTimeout(function() {
                    window.location.href = "https://trabajo-final-hipermedial.vercel.app/"
                }, 1000)
            }
        }
    })
}
