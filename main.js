// grabbing all dom elements 
const check_icon = document.getElementById("check-icon");
const x_icon = document.getElementById("x-icon")
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const createButton = document.getElementById("create-button");

window.onload = document.querySelector("#note-text").select();

var index = 0;

// creating random arrays for when we create a note it will be different from others 
var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];


createButton.addEventListener("click", () => {
    document.querySelector("#modal").style.display = "block";
  });
  
x_icon.addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
  });

check_icon.addEventListener("click", createNote);

function createNote() {
    
    var text = document.getElementById("note-text").value;

    let note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("h1");

    note.className = "note";
    details.className = "details";
    noteText.textContent = text;

    details.appendChild(noteText);
    note.appendChild(details);

    if(index > random_colors.length - 1)
    index = 0;

    note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

    note.addEventListener("dblclick", () => {
    note.remove();
  })

    document.querySelector(".container2").appendChild(note);

    note.addEventListener("mouseenter", function() {
        note.style.transform = "scale(1.1)";
    })

    note.addEventListener("mouseleave", function() {
        note.style.transform = "scale(1)";
    })

    document.getElementById("note-text").value = '';
}

function margin() {
    return Math.floor(Math.random() * random_margin.length);
}

function rotate() {
    return Math.floor(Math.random() * random_degree.length);
}

function color(index) {

    if(index > random_colors.length - 1) {
        index = 0; // returns back the first index of colors array
    }

    return random_colors[index++];  // im going to get colors by an order
}