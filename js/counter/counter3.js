let counts = setInterval(updated)
let upto = 29000
function updated() {
    var count = document.getElementById('counter')
    count.innerHTML = ++upto
    if (upto === 29840) {
        clearInterval(counts)
    }
}