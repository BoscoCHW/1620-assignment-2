const changeThemebtn = document.querySelector('#change-theme-btn')
function changeTheme() {
    document.body.classList.toggle("dark-mode")
    let mode = changeThemebtn.textContent
    if (mode === "Light Mode") { changeThemebtn.textContent = "Dark Mode"} 
    else { changeThemebtn.textContent = "Light Mode"} 
}
changeThemebtn.onclick = changeTheme


const addNotebtn = document.querySelector('#add-note-btn')
function addNoteEditor() {
    const newNote = document.createElement('div')
    const addNotebtn = document.querySelector('#add-note-btn')
    newNote.className = 'new_note'
    const innerhtml = `<p href="#">+ </p>
                    <textarea name="quicknote" rows="10" cols="33" placeholder="your note here"></textarea>
                    <div class="action">
                        <button href="#" id="save">save</button>
                        <button href="#" id="cancel">cancel</button>
                    </div>`
    newNote.innerHTML = innerhtml
    addNotebtn.parentElement.replaceChild(newNote, addNotebtn)

    document.querySelector('#cancel').addEventListener('click', cancelNewNote)
}
addNotebtn.addEventListener('click', addNoteEditor)

function cancelNewNote() {
    let newNote = document.querySelector('div.new_note')
    let addNotebtn = document.createElement('button')
    addNotebtn.id = 'add-note-btn'
    addNotebtn.name = 'add-note'
    addNotebtn.innerText = '+ create a new note'
    newNote.parentElement.replaceChild(addNotebtn, newNote)
    
    document.querySelector('#add-note-btn').onclick = addNoteEditor
}
