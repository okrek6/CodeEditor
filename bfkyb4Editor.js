/*jshint globals: true, browser: true*/

var apply = false;

function launchTextarea() {
    "use strict";
    document.getElementById('previewPanelWindow').innerHTML = document.getElementById('htmlCode').value;
}

function toggleTextarea() {
    "use strict";
    var css = document.getElementById("cssCode").value;
    var color = document.getElementById("toggle").style.backgroundColor;

    if (!apply) {
        apply = document.getElementById("styleTag");
        apply.innerHTML = css;

        document.getElementById('toggle').style.backgroundColor = "coral";
    } else {
        apply.innerHTML = '';
        apply = false;

        document.getElementById('toggle').style.backgroundColor = "#67AC5B";
    }
}

function eraseTextArea() {
    "use strict";
    var textareaObjectCSS = document.getElementById('cssCode');
    var textareaObjectHTML = document.getElementById('htmlCode');
    var preview = document.getElementById('previewPanelWindow');

    console.dir(textareaObjectCSS);
    console.dir(textareaObjectHTML);
    Console.dir(preview);


    textareaObjectCSS.value = "";
    textareaObjectHTML.value = "";
    preview.innerHTML = "";
}

function CSSDoubleClick() {
    "use strict";
    document.getElementById("cssCode").innerHTML = "h2 {color: #FF6F61; text-align: center;} p {font-family: helvetica; font-size: 20px; border: 2px solid red; border-radius: 12px;}";
}

function HTMLDoubleClick() {
    "use strict";
    document.getElementById("htmlCode").innerHTML = "<h2> Welcome to my text editor!</h2> <p>You can test and create your own HTML and CSS in this text editor</p>";
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