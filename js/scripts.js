//variables and objects

var toggle = document.getElementById("toggle-menu");
var mainMenu = document.getElementById("main-menu");

var lenguage = document.getElementById("button-lenguage");
var select = document.getElementById("select-lenguage");

var openModal = document.getElementById("open-modal");
var closeModal = document.getElementById("close-modal");
var modal = document.getElementById("book-modal");

var checkin = document.getElementById("check-in");
var checkout = document.getElementById("check-out");

var calendar1 = document.getElementById("calendar-one");
var calendar2 = document.getElementById("calendar-two");

//functions

//Events

//function to show the menu off canvas
toggle.addEventListener('click', function(){
	mainMenu.classList.toggle('show-window');
});

//function to show the options to selecte lenguage
lenguage.addEventListener('click', function(){
	select.classList.toggle('show-menu');
});

//function to open modal
openModal.addEventListener('click', function(){
	modal.classList.add('open-modal');
});

//function to close modal
closeModal.addEventListener('click', function(){
	modal.classList.remove('open-modal');
});

//function to animate the calendars

checkin.addEventListener('click', function(){
	calendar1.classList.toggle('calendar-play');
});

checkout.addEventListener('click', function(){
	calendar2.classList.toggle('calendar-play');
});