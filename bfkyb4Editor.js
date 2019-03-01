var apply = false;

function launchTextarea() {
	"use strict";
	document.getElementById('previewPanel').innerHTML = document.getElementById('HTMLCODE').value;
}

function toggleTextarea() {
	"use strict";
	var css = document.getElementById("CSSCODE").value;
    var color = document.getElementById("toggle").style.backgroundColor;

	if (!apply) {
		apply = document.getElementById("styleTag");
		apply.innerHTML = css;

		document.getElementById('toggle').style.backgroundColor = "coral";
	} else {
		apply.innerHTML = '';
		apply = false;

		document.getElementById('toggle').style.backgroundColor = "#35ACE8";
	}
}

function clearTextarea() {
	"use strict";
	var textareaObjectCSS = document.getElementById('CSSCODE');
    var textareaObjectHTML = document.getElementById('HTMLCODE');
    var preview = document.getElementById('previewPanel');

	console.dir(textareaObjectCSS);
	console.dir(textareaObjectHTML);
	console.dir(preview);

	textareaObjectCSS.value = "";
	textareaObjectHTML.value = "";
	preview.innerHTML = "";
}

function CSSDoubleClick() {
	"use strict";
	document.getElementById("CSSCODE").innerHTML = "h4 {color: lightblue; text-align:center;} p { font-family: verdana, cursive; font-size: 35pt; text-align: right; }";
}

function HTMLDoubleClick() {
	"use strict";
	document.getElementById("HTMLCODE").innerHTML = "<h4> Hello World! </h4> <p> Welcome to my code editor application! </p>";
}

function changeHeader() {
	"use strict";
	var header;
	var newTitle = prompt("Please enter a new title:", "Code Editor");

	if (newTitle === null || newTitle === "") {
		header = "Code Editor";
	} else {
		header = newTitle;
	}

	document.getElementById("header").innerHTML = header;
	document.getElementById("title").innerHTML = header;
}