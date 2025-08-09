console.log("Welcome To Notes Keeping Software MyNotes.");
/* to show notes after reloading */
showNotes();
/* if user add a note then add it to local storage */
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
// if local storage does'nt contain any data
    if (notes == null) {
        notesObj = [];
    }
    // if contain then
    else {
        notesObj = JSON.parse(notes);
    }

    if (addTxt.value != []) //  if user don't enter any text and press addnote then it become false
    {
        let myObj = {
            title : addTitle.value,
            text : addTxt.value
        }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";   //for Clearing textarea after adding note
        addTitle.value=""//for Clearing textbox after adding title
        showNotes();
    }
})
// Function to show notes on the page
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2 noteCard" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div> `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = ` <h4 class="my-4"style="text-align:center;">Don't Have Any Note.🙁</h4> `;
    }
}
// for deleting a note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// for searching the note by keyword
let search = document.getElementById("searchTxt");
search.addEventListener("input", function (){
    let inputval = search.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputval)){
            element.style.display ="block";
        }
        else{
            element.style.display= "none"
        }
    })
})