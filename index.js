
const input = document.querySelector('input');

function addingEventListener() {
	input.addEventListener('click', function(e) {
		alert('I was clicked!');
	});
}