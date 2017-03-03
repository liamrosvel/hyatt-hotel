//OBJECTS AND VARIABLES

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

//FUNCTIONS

function scrollHeader(e)
{
	var header = document.getElementById("header");
	var button = document.querySelector(".js-scrollButton");
	var type1 = document.querySelector(".js-type-scroll1");
	var type2 = document.querySelector(".js-type-scroll2");
	var scrollHeader = document.body.scrollTop;

	if(scrollHeader > 100)
	{
		header.classList.add("header-scroll");
		button.classList.add("button-scroll");
		type1.classList.add("type-scroll");
		type2.classList.add("type-scroll");
	}
	else
	{
		header.classList.remove("header-scroll");
		button.classList.remove("button-scroll");
		type1.classList.remove("type-scroll");
		type2.classList.remove("type-scroll");
	}
}

//EVENTS

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

window.addEventListener('scroll', scrollHeader);