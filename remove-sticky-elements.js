// copy this 👇 without // and add it as a bookmark
//javascript:document.querySelectorAll('body *').forEach(el => ["sticky", "fixed"].includes(getComputedStyle(el).position) && el.remove())

document.querySelectorAll('body *')
	.forEach(el => {
		["sticky", "fixed"].includes(getComputedStyle(el).position) && el.remove()
	})