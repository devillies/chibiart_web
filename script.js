function gotoPayment() {
	window.location.assign('getimageForm.html')
}

function process() {
	let artVal = document.getElementById('art').value
	console.log(artVal)

	document.getElementById('total').innerHTML = artVal
}

function goNext() {
	setTimeout(() => {
		alert('Thank you')
		window.location.assign('about.html')
	}, 1000)
}
