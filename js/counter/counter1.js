let counts3 = setInterval(updated)
let upto3 = 0
function updated() {
    var count = document.getElementById('counter3')
    count.innerHTML = ++upto3
    if (upto3 === 15) {
        clearInterval(counts3)
    }
}