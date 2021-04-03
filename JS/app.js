//function 1: switch between light and dark mode
//1. select the button to change theme
//2. when the button is clicked, toggle the dark-mode class for the body and apply dark mode style
//3. change the button text to the other mode (dark -> light and light ->dark)
const changeThemebtn = document.querySelector('#change-theme-btn')
changeThemebtn.onclick = function () {
    document.body.classList.toggle("dark-mode")
    let mode = changeThemebtn.textContent
    if (mode === "Light Mode") { changeThemebtn.textContent = "Dark Mode"} 
    else { changeThemebtn.textContent = "Light Mode"} 
}

const slideSideMenubtn = document.querySelector('#slide-side-menu-btn')
slideSideMenubtn.onclick = function () {
    slideSideMenubtn.parentElement.classList.toggle('expanded')
    if (slideSideMenubtn.name === 'hide') {
        slideSideMenubtn.name = 'expand'
    } else {
        slideSideMenubtn.name = 'hide'
    }
    if (slideSideMenubtn.textContent === "<<") {
        slideSideMenubtn.textContent = ">>"
    } else {
        slideSideMenubtn.textContent = "<<"
    }

}


//function 2: open note editor when "create new note" button is clicked
//1. select "create new note" button
//2. add event listener to the button, when clicked, display note taking area
//  function: display note taking area
//  2a. create a div to contain note taking area
//  2b. add innerhtml for the components
//  2c. replace the "add new note" button with the note taking area div
//  2d. add evevnt listener for cancel and save button for their corresponding actions
const addNotebtn = document.querySelector('#add-note-btn')
addNotebtn.addEventListener('click', addNoteEditor)

function addNoteEditor() {
    const addNotebtn = document.querySelector('#add-note-btn')
    const newNote = document.createElement('div')
    newNote.className = 'new_note'
    const innerhtml = `<p href="#">+ </p>
                    <textarea id="note-content" name="quicknote" rows="10" cols="33" placeholder="your note here (use first line as note title)"></textarea>
                    <div class="action">
                        <button href="#" id="save">save</button>
                        <button href="#" id="cancel">cancel</button>
                    </div>`
    newNote.innerHTML = innerhtml
    addNotebtn.parentElement.replaceChild(newNote, addNotebtn)

    document.querySelector('#note-content').focus()

    document.querySelector('#cancel').addEventListener('click', closeNewNote)
    document.querySelector('#save').addEventListener('click', addNote)
}

//function 3: close note taking area when the cancel button is clicked
//1. create element for "create new note" button
//2. add id to the button
//3. add name to the button
//4. select note taking area div
//5. replace the note taking area div by the "create new note" button
//6. add event listener for the "create new note" button
function closeNewNote() {
    
    const addNotebtn = document.createElement('button')
    addNotebtn.id = 'add-note-btn'
    addNotebtn.name = 'add-note'
    addNotebtn.innerText = '+ create a new note'

    const newNote = document.querySelector('div.new_note')
    newNote.parentElement.replaceChild(addNotebtn, newNote)
    
    document.querySelector('#add-note-btn').addEventListener('click', addNoteEditor) 
}


let notes = new Array

function addNote() {
    let noteContent = document.querySelector('#note-content').value
    if (noteContent !== "") {

        let firstlineBreak = noteContent.indexOf('\n')

        let note = {}
        if (firstlineBreak === -1) {
            note.title = noteContent
        } else {
            note.title = noteContent.slice(0, firstlineBreak)
            note.body = noteContent.slice(firstlineBreak, noteContent.length)
        }
        
        notes.push(note)

        closeNewNote()
        displayNoteTitle(note)
        
    }
}   

function displayNoteTitle(note) {
    const sideMenu = document.querySelector('.side-menu')
    sideMenu.appendChild(createMenuItem(note))
}

function createMenuItem(note) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.textContent = note.title
    btn.addEventListener('click', displayNote(note))

    li.appendChild(btn)

    return li
}

function displayNote(note) {
    let contentDiv = document.querySelector('section.content')
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    let noteContainer = document.createElement('div')
    noteContainer.className = 'note-container'
    noteContainer.textContent = note.title + note.body
    contentDiv.appendChild(noteContainer)
}
