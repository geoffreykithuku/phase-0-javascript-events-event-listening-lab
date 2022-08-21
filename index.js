
const input = document.getElementById('button');

function addingEventListener() {
	input.addEventListener('click', function(e) {
		alert('I was clicked!');
	});
}
addingEventListener();