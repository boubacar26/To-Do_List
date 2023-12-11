let bouton = document.getElementById('bouton')
let note = document.getElementById('note')
let listeNote = document.getElementById('listeNote')


function ajoutNote() {
    if (note.value !== "") {
        let tache = document.createElement('li')
        tache.classList.add('toDo')
        listeNote.appendChild(tache)
        tache.innerText = note.value

        // Creation des boutons de validation
        let span = document.createElement('span')
        tache.appendChild(span)

        // Les boutons
        let toDo = document.createElement('button')
        let doing = document.createElement('button')
        let done = document.createElement('button')

        
        // Bouton To do
        span.appendChild(toDo)
        toDo.innerText = 'To Do'
        toDo.classList.add('toDo')
        
        toDo.addEventListener('click', function () {
            tache.classList.add('toDo')
            tache.classList.remove('doing')
            tache.classList.remove('done')
        })

        // Bouton Doing
        span.appendChild(doing)
        doing.innerText = 'Doing'
        doing.classList.add('doing')
        
        doing.addEventListener('click', function () {
            tache.classList.add('doing')
            tache.classList.remove('done')
            tache.classList.remove('toDo')
        })

        // Bouton Done
        span.appendChild(done)
        done.innerText = 'Done'
        done.classList.add('done')

        done.addEventListener('click', function () {
            tache.classList.add('done')
            tache.classList.remove('toDo')
            tache.classList.remove('doing')
        })

        // Vider le Input
        note.value = ""

    }else{
        alert("Ajoutez d'abord une tache")
    }
}