let counts2 = setInterval(updated)
let upto2 = 900
function updated() {
    var count = document.getElementById('counter2')
    count.innerHTML = ++upto2
    if (upto2 === 1786) {
        clearInterval(counts2)
    }
}

// https://www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/