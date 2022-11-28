const myMap = L.map('issMap').setView([0, -0.0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();

	const { latitude, longitude} = data;

	L.marker([latitude, longitude]).addTo(myMap)

	document.querySelector('#lat').textContent = latitude;
	document.querySelector('#lon').textContent = longitude;

	console.log(latitude)
	console.log(longitude)
}

getISS()
