var teamList = [
{ name: "Ranelagh", type: "Club", cat: "Open", lat: 53.3032, long: -6.2855 },
{ name: "Dublin Gravity", type: "Club", cat: "Women", lat: 53.3032, long: -6.2855 },
{ name: "Gravity Mixed", type: "Club", cat: "Mixed", lat: 53.3032, long: -6.2855 },
{ name: "Jabba the Huck", type: "Club", cat: "Mixed", lat: 53.3702, long: -6.2205 },
{ name: "Rebel Open", type: "Club", cat: "Open", lat: 51.8885, long: -8.4752 },
{ name: "Rebel Women", type: "Club", cat: "Women", lat: 51.8885, long: -8.4752 },
{ name: "Rebel Mixed", type: "Club", cat: "Mixed", lat: 51.8885, long: -8.4752 },
{ name: "PELT Open", type: "Club", cat: "Open", lat: 52.6738, long: -8.5722 },
{ name: "PELT Mixed", type: "Club", cat: "Mixed", lat: 52.6738, long: -8.5722 },
{ name: "Tribe Open", type: "Club", cat: "Open", lat: 53.2707, long: -9.0568 },
{ name: "Tribe Women", type: "Club", cat: "Women", lat: 53.2707, long: -9.0568 },
{ name: "Tribe Mixed", type: "Club", cat: "Mixed", lat: 53.2707, long: -9.0568 },
{ name: "XVI", type: "Club", cat: "Open", lat: 53.3498, long: -6.2603 },
{ name: "Cu Callahan", type: "Club", cat: "Open", lat: 53.3635, long: -6.2281 },
{ name: "Flame Women", type: "Club", cat: "Women", lat: 53.3932, long: -6.1075 },
{ name: "Bee Mixed", type: "Club", cat: "Mixed", lat: 53.3284, long: -6.3355 },
{ name: "UCD Open", type: "College", cat: "Open", lat: 53.3084, long: -6.2238 },
{ name: "UCD Women", type: "College", cat: "Women", lat: 53.3084, long: -6.2238 },
{ name: "UCD Mixed", type: "College", cat: "Mixed", lat: 53.3084, long: -6.2238 },
{ name: "DCU Open", type: "College", cat: "Open", lat: 53.3858, long: -6.2575 },
{ name: "DCU Women", type: "College", cat: "Women", lat: 53.3858, long: -6.2575 },
{ name: "DCU Mixed", type: "College", cat: "Mixed", lat: 53.3858, long: -6.2575 },
{ name: "Trinity Open", type: "College", cat: "Open", lat: 53.3444, long: -6.2533 },
{ name: "Trinity Women", type: "College", cat: "Women", lat: 53.3444, long: -6.2533 },
{ name: "Trinity Mixed", type: "College", cat: "Mixed", lat: 53.3444, long: -6.2533 },
{ name: "UCC Open", type: "College", cat: "Open", lat: 51.8921, long: -8.4933 },
{ name: "UCC Women", type: "College", cat: "Women", lat: 51.8921, long: -8.4933 },
{ name: "UCC Mixed", type: "College", cat: "Mixed", lat: 51.8921, long: -8.4933 },
{ name: "UL Ninjas Open", type: "College", cat: "Open", lat: 52.6739, long: -8.5751 },
{ name: "UL Ninjas Women", type: "College", cat: "Women", lat: 52.6739, long: -8.5751 },
{ name: "UL Ninjas Mixed", type: "College", cat: "Mixed", lat: 52.6739, long: -8.5751 },
{ name: "UG (Galway) Open", type: "College", cat: "Open", lat: 53.2821, long: -9.0621 },
{ name: "UG (Galway) Women", type: "College", cat: "Women", lat: 53.2821, long: -9.0621 },
{ name: "UG (Galway) Mixed", type: "College", cat: "Mixed", lat: 53.2821, long: -9.0621 }
];


function getLocation() {var personName = document.getElementById("fname").value; if (personName == ""){ 
document.getElementById("displayResult").innerHTML = "Please enter your name."; return;}
if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);} 
else {document.getElementById("displayResult").innerHTML = "Sorry, geolocation is not supported on this browser.";}}

function showPosition(position) {var myLat = position.coords.latitude; var myLong = position.coords.longitude;
var userChoiceType = document.getElementById("teamType").value;var userChoiceCat = document.getElementById("teamCat").value;
var closestMatch = null;
var smallDiff = 1000;

for (var i = 0; i < teamList.length; i++) {var currentTeam = teamList[i];
if (currentTeam.type == userChoiceType && currentTeam.cat == userChoiceCat) {
var latDist = Math.abs(myLat - currentTeam.lat);
var longDist = Math.abs(myLong - currentTeam.long);
var totalDist = latDist + longDist;
if (totalDist < smallDiff) {smallDiff = totalDist; closestMatch = currentTeam;}}}

if (closestMatch != null) {document.getElementById("displayResult").innerHTML = 
"<h3>Result for " + document.getElementById("fname").value + "</h3>" +
"<p>The closest team we found is: <b>" + closestMatch.name + "</b></p>";} 
else {document.getElementById("displayResult").innerHTML = "<p>Sorry, no match found.</p>";}}