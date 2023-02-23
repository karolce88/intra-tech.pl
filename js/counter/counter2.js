let counts4 = setInterval(updated)
let upto4 = 0
function updated() {
	var count4 = document.getElementById('counter4')
	count4.innerHTML = ++upto4
	if (upto4 === 59) {
		clearInterval(counts4)
	}
}
