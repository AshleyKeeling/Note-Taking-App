const noteText = document.getElementById('note-input');
const noteCategory = document.getElementById('category-input');
const createNoteBtn = document.getElementById('add-note-btn');
const notes = document.getElementById('notes');

// sets note date
const d = new Date();
const date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

let noteTemplate = document.createElement('div');
let notesCounter = 0;
createNoteBtn.addEventListener('click', addNote);


function addNote() {
    if(!noteText.value) {
        alert('Please enter note');
    } else {

        noteTemplate.innerHTML = 
                                `<div class="note-item" id="note-${notesCounter}">
                                    <h4 class="note-date">${date}</h4>
                                    <h4 class="note-category note-item-${noteCategory.value}">${noteCategory.value}</h4>
                                    <p class="note-text">${noteText.value}</p>
                                    <button onClick='deleteNote("note-${notesCounter}")' class="note-delete">X</button>
                                </div>`;

        notes.appendChild(noteTemplate.cloneNode(true));
        noteText.value = '';
        notesCounter++;
    }
}

function deleteNote(ID) {
    let note = document.getElementById(ID);
    note.remove();
}