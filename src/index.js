// importing css
import "./index.css"

// importing image
import logo from "./noteTakingApp_logo.jpeg"


// logic for note app to add notes
// setting image to img tag
document.querySelector("#logo").src = logo;

document.querySelector("#addNote").addEventListener("click", addNote);

let notes = JSON.parse(localStorage.getItem("notes")) || [];
displayNotes();

function addNote()
{
   let note = document.querySelector("#entry").value;
   notes.push(note);
   localStorage.setItem("notes", JSON.stringify(notes));
   displayNotes();
}

function displayNotes()
{
    let notesBox = document.querySelector("#notesBox");
    notesBox.innerHTML = null;

    notes.forEach((note) => {
        let p = document.createElement("p");
        p.textContent = note;

        notesBox.append(p);
    });
}