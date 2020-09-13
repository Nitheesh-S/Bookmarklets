// copy this 👇 without // and add it as a bookmark
//javascript:fetch("https://rel.ink/api/links/", {headers: { "accept": "application/json, text/plain, */*", "content-type": "application/json; charset=UTF-8" },body: JSON.stringify({ url: window.location.href }),method: "POST",}).then((resp) => resp.json()).then((data) => navigator.clipboard.writeText(`https://rel.ink/${data.hashid}`).then(() => alert(`copied https://rel.ink/${data.hashid}`)).catch(err => alert(err)));

fetch("https://rel.ink/api/links/", {
	headers: { 
		"accept": "application/json, text/plain, */*", 
		"content-type": "application/json; charset=UTF-8" 
	},
	body: JSON.stringify({
		url: window.location.href 
	}),method: "POST",})
.then((resp) => resp.json())
.then((data) => {
	navigator.clipboard.writeText(`https://rel.ink/${data.hashid}`)
	.then(() => alert(`copied https://rel.ink/${data.hashid}`))
	.catch((err) => alert(err))
});



