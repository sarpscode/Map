   //Making a map and titles
const myMap = L.map('issMap').setView([0, 0], 1);

const IssIcon = L.icon({
	iconUrl: 'natty-2.jpg',
	iconSize: [50, 42],
	iconAnchor: [25, 16]
})
const marker = L.marker([0, 0], {icon:IssIcon}).addTo(myMap)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS() {
	const response = await fetch(api_url);
	const data = await response.json();

	const { latitude, longitude} = data;

     
	marker.setLatLng([latitude, longitude]);
	myMap.setView([latitude, longitude], 2);
	document.querySelector('#lat').textContent = latitude.toFixed(2);
	document.querySelector('#lon').textContent = longitude.toFixed(2);

	console.log(latitude)
	console.log(longitude)
}

getISS()

setInterval(getISS, 1000)
