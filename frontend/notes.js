let username = "will"; // fetch from json
let topic = "javascript"; // fetch from json
let blockId = 1;
// var editables = document.querySelectorAll('.column')

const editableColumns = document.querySelector("#editable-columns");

function textCollectionArray() {
  let result = [];
  for (let i = 0; i < editableColumns.children.length; i++) {
    result.push(editableColumns.children[i].innerHTML);
  }
  console.log(result);
  return result;
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("initial textbox loaded");
  let div = document.createElement("div");

  div.className = "column";
  div.setAttribute("data-block-id", username + "-" + topic + "-" + blockId);
  div.setAttribute("draggable", "true");
  div.style.backgroundColor = "skyblue";
  div.style.color = "white";
  div.style.fontSize =
    "1em"; /* div.style.top = "50px" */ /* div.style.position = "absolute" */
  /* div.style.left = "50px" */ div.style.height = "1em";
  div.style.width = "500px";
  div.contentEditable = "true";
  div.spellcheck = "true";

  addDnDHandlers(div);

  editableColumns.append(div);
});

document.addEventListener("keydown", event => {
  if (event.which === 13 || event.keyCode === 13) {
    event.preventDefault();
    // e.stopPropagation();
    let div = document.createElement("div");
    div.className = "column";
    div.setAttribute("data-block-id", username + "-" + topic + "-" + ++blockId);
    div.setAttribute("draggable", "true");
    div.style.backgroundColor = "skyblue";
    div.style.color = "white";
    div.style.fontSize =
      "1em"; /* div.style.left = "50px" */ /* div.style.top = "50px" */
    /* div.style.position = "absolute" */ div.style.height = "1em";
    div.style.width = "500px";
    div.contentEditable = "true";

    addDnDHandlers(div);

    editableColumns.append(div);
    div.focus();
    window.addEventListener("load", event => {
      console.log("page is fully loaded");
    });
  }

  // Save the data in localStorage
  // for (var i = 0; i < editables.length; i++) {
  //   localStorage.setItem(
  //     editables[i].getAttribute('id'),
  //     editables[i].innerHTML
  //   )
  // }

  localStorage.setItem("content", JSON.stringify(textCollectionArray()));
});

document.addEventListener("keydown", event => {
  // console.log(event.target)
  if (event.keyCode === 8 && event.target.textContent === "") {
    event.target.previousSibling.focus();
    // https://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser
    event.target.remove();
    // debugger;
  }
});

$(".toolbar a").click(function(e) {
  var command = $(this).data("command");
  if (command === "h1" || command == "h2" || command === "p") {
    document.execCommand("formatBlock", false, command);
  }
  if (command === "forecolor" || command === "backcolor") {
    document.execCommand($(this).data("command"), false, $(this).data("value"));
  }
  if (command === "createlink" || command === "insertimage") {
    url = prompt("Enter the link here: ", "http://");
    document.execCommand($(this).data("command"), false, url);
  } else {
    document.execCommand($(this).data("command"), false, null);
  }
});

// let highlighte dText = document.querySelector('div').textContent;

let toolbar = document.querySelector(".toolbar");

document.addEventListener("dblclick", e => {
  console.log("double clicked");
  // toolbar.style.display = "block";
  toolbar.style.visibility = "visible";
});

window.onclick = function(event) {
  toolbar.style.visibility = "hidden";
};

// setInterval(e => {
// 	let pre = document.querySelector("pre")
//     let div = document.querySelector("div")
//     pre.textContent = div.outerHTML
// }, 1000);

// if (typeof Storage !== 'undefined') {
//   if (localStorage.getItem('title') !== null) {
//     editables[0].innerHTML = localStorage.getItem('title')
//   }
// }

// save the changes on every keydown event
// document.addEventListener('keydown', function(e) {
//   for (var i = 0; i < editables.length; i++) {
//     localStorage.setItem(editables[i].getAttribute('id'), editables[i].innerHTML);
//   }
// });

console.log("dragAndDrop script loaded");

let dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.outerHTML);

  this.classList.add("dragElem");
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add("over");

  e.dataTransfer.dropEffect = "move"; // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
}

function handleDragLeave(e) {
  this.classList.remove("over"); // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //alert(this.outerHTML);
    //dragSrcEl.innerHTML = this.innerHTML;
    //this.innerHTML = e.dataTransfer.getData('text/html');
    this.parentNode.removeChild(dragSrcEl);
    // debugger;
    var dropHTML = e.dataTransfer.getData("text/html");
    this.insertAdjacentHTML("beforebegin", dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);
    // debugger;
  }
  this.classList.remove("over");
  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
  this.classList.remove("over");

  /*[].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });*/
}

function addDnDHandlers(elem) {
  elem.addEventListener("dragstart", handleDragStart, false);
  elem.addEventListener("dragenter", handleDragEnter, false);
  elem.addEventListener("dragover", handleDragOver, false);
  elem.addEventListener("dragleave", handleDragLeave, false);
  elem.addEventListener("drop", handleDrop, false);
  elem.addEventListener("dragend", handleDragEnd, false);
}

var cols = document.querySelectorAll("#editable-columns .column");
[].forEach.call(cols, addDnDHandlers);
