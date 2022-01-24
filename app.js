(document.getElementById("add")).addEventListener("click", function(){
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    let newNote = document.createElement('div');
    title = title.value;
    content = content.value;
    if(title === "" || content === ""){
        return;
    }
    newNote.classList.add('notes');
    newNote.innerHTML=`
        <h3>${title}</strong></h3>
        <p> ${content}</p>
    <button id="deleteButton" onclick="this.parentElement.remove()"}>X</button>`;    
    const noteArea=document.getElementById("noteArea");
    
    title = document.getElementById('title');
    content = document.getElementById('content');
    title.value = ``; content.value = ``;
    noteArea.appendChild(newNote);
})