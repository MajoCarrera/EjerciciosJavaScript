var e1_toggle = true;
function toggleStyleSheet() {
	var node = document.getElementById('e1_style');
	node.parentNode.removeChild(node);
	var sheet = document.createElement('style')
	sheet.id = 'e1_style';
	if(e1_toggle)
		sheet.innerHTML = "#e1 {border: 2px solid black; background-color:#d1b932; width: 200px ;height:300px}";
	else
		sheet.innerHTML = "#e1 {font-weight: bold; font-size: 115%; color: green;}";

	document.body.appendChild(sheet);
	e1_toggle = ! e1_toggle;
	updateNumberOfStyleSheets();
}

function updateNumberOfStyleSheets(){
	document.getElementById('numOfStyleSheets').innerHTML = document.styleSheets.length;
}

function addOnClick(el, func) {
	if(el.addEventListener) {
		el.addEventListener('click', func, false);
	} else {
		el.attachEvent('onclick', func);
	}
}

addOnClick(document.getElementById('tss'), toggleStyleSheet);

updateNumberOfStyleSheets();
