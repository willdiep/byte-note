let displayResults = document.getElementById('display-results')
document.addEventListener('DOMContentLoaded', function(){
    searchButtonListener()
    userArticlesListener()
    userNotesListener()
    // newNoteListener()
})

function searchButtonListener(){
    let searchBox = document.getElementById('search-article-box')
    searchBox.addEventListener('submit', function(e){
        let searchTerm = document.getElementById('search-term').value
        e.preventDefault()
        // console.log(searchTerm)
        searchArticles(searchTerm)
    })
}

// function newNoteListener(){
//     let newNoteButton = document.getElementById('newnote')
//     newNoteButton.setAttribute('onclick', "window.location.href='/frontend/note.html")
// }

function searchArticles(searchTerm){
    console.log(searchTerm)
    fetch(`https://dev.to/api/articles/?tag=${searchTerm}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        displayResults.innerHTML = ""
        displayResults.innerHTML = json.map((element) => renderSearchResult(element)).join('')
        let previewButtons = document.getElementsByClassName('preview-button')
        for(let i = 0; i< previewButtons.length; i++){
            previewButtons[i].addEventListener('click', function(e){
                let article = e.target.parentElement
                saveArticle(article)
            })
        }
    })
}

function renderSearchResult(result){
    return `
    <div class="search-result" id=${result.id}>
        <sub>Article ID: ${result.id}</sub>
        <br/><br/>
        <p id=${result.id}-title>${result.title}</p>
        <a id=${result.id}-link href=${result.url}>${result.url}</a>
        <br/><br/>
        <p id=${result.id}-author>By: ${result.user.name}</p>
        <button class='preview-button'>Preview Article</button>
    </div>
    `
}

function saveArticle(article){
    let articleId = article.id 
    let articleTitle = document.getElementById(`${articleId}-title`).innerText
    let articleLink = document.getElementById(`${articleId}-link`).innerText
    let articleAuthor = document.getElementById(`${articleId}-author`).innerText
    console.log(articleTitle, articleLink, articleAuthor)
    let data = {
        id: articleId,
        title: articleTitle,
        url: articleLink,
        author: articleAuthor
    }
    console.log(data)
    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(json => {
        let article = json.data
        console.log(article)
        displayResults.innerHTML = ''
        displayResults.innerHTML = renderPickedPost(article)
        let userSaveButton = document.getElementById('usersave-button')
        userSaveButton.addEventListener('click', function(e){
            saveUserArticle(e.target.parentElement.id)
        })
    })
}

function renderPickedPost(article){
    return `
    <br><br>
    <div id=${article.id}>
        <p>${article.id}</p>
        <p id=${article.id}-title>${article.attributes.title}</p>
        <a id=${article.id}-link href=${article.attributes.url}>${article.attributes.url}</a>
        <p id=${article.id}-author>${article.attributes.author}</p>
        <button id='usersave-button'>Save Article</button>
    </div>
    `
}

function renderArticle(article){
    console.log(article)
    return `
    <br><br>
    <div id=${article.id}>
        <p>${article.id}</p>
        <p id=${article.id}-title>${article.title}</p>
        <a id=${article.id}-link href=${article.url}>${article.url}</a>
        <p id=${article.id}-author>By: ${article.author}</p>
        <button id='article-button'>Go to Article</button>
    </div>
    `
}

function renderNote(note){
    console.log(note)
    return `
    <br><br>
    <div id=${note.id}>
        <p>${note.id}</p>
        <p id=${note.id}-title>${note.topic}</p>
        <p id=${note.id}-autho-content>${note.content}</p>
    </div>
    `
}

function saveUserArticle(articleId){
    let data = {
        article_id: articleId,
        user_id: 1
    }
    fetch('http://localhost:3000/user_articles', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(json => console.log(json))
}

function userArticlesListener(){
    let articleButton = document.getElementById('userArticles')
    articleButton.addEventListener('click', function(e){
        getUser('articles')
    })
}

function userNotesListener(){
    let noteButton = document.getElementById('userNotes')
    noteButton.addEventListener('click', function(e){
        getUser('notes')
    })
}

function getUser(things){
    let id = 1
    fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(json => {
        let user = json.data.attributes
        let notes = user.notes
        let articles = user.articles
        console.log(user)
        console.log(notes)
        console.log(articles)
        displayResults.innerHTML = ""
        if(things == 'articles'){
            displayResults.innerHTML = articles.map((article) => renderUserArticles(article)).join('')
            let articleButtons = document.getElementsByClassName('article-button')
                for(let i = 0; i< articleButtons.length; i++){
                    articleButtons[i].addEventListener('click', function(e){
                        let id = e.target.parentElement.id
                        goToArticle(id)
                    })
                }
        }else if (things == 'notes'){
            let newNoteButton = document.createElement('button')
            newNoteButton.setAttribute('id', 'new-note')
            newNoteButton.addEventListener('click', function(e){
                console.log(e.target)
            })
            displayResults.innerHTML = notes.map((note) => renderUserNotes(note)).join('')
            let noteButtons = document.getElementsByClassName('note-button')
            for(let i = 0; i< noteButtons.length; i++){
                noteButtons[i].addEventListener('click', function(e){
                let id = e.target.parentElement.id
                goToNote(id)
                })
            }
        }else {
            alert("Thats a weird error!")
        }
    })
}

function goToArticle(id){
    fetch(`http://localhost:3000/users/1`)
    .then(response => response.json())
    .then(json => {
        console.log(id)
        let articles = json.data.attributes.articles
        let article = articles.find(function(article){
            return article.id == id
        })
        console.log(article)
        displayResults.innerHTML = ""
        displayResults.innerHTML = renderUserArticles(article)
        let articleButton = document.getElementsByClassName('article-button')
        let articleArray = Array.from(articleButton)
        articleArray[0].innerText = 'Go Back to All Articles'
        articleArray[0].addEventListener('click', function(){
            getUser('articles')
        })
    })
    
    // let allArticlesButton = document.getElementById('all-articles-button')
    // allArticlesButton.addEventListener('click', function(e){
    //     e.preventDefault();
    //     getUser('articles')
    // })
}

function goToNote(id){
    fetch(`http://localhost:3000/users/1`)
    .then(response => response.json())
    .then(json => {
        console.log(id)
        let notes = json.data.attributes.notes
        let note = notes.find(function(note){
            return note.id == id
        })
    displayResults.innerHTML = ""
    displayResults.innerHTML = renderUserNotes(note)
    let noteButton = document.getElementsByClassName('note-button')
    let noteArray = Array.from(noteButton)
    noteArray[0].innerText = 'Go Back to All Notes'
    noteArray[0].addEventListener('click', function(){
        getUser('notes')
    })
    // let allNotesButton = document.createElement('button')
    // allNotesButton.innerText = 'Go Back to All Notes'
    // allNotesButton.addEventListener('click', function(e){
    //     e.preventDefault();
    //     getUser('notes')
    // })
    // allNotesButton.append(displayResults)
})
}

function renderUserArticles(article){
    console.log(article)
    return `
    <br><br>
    <div id=${article.id}>
        <p>${article.id}</p>
        <p id=${article.id}-title>${article.title}</p>
        <a id=${article.id}-link href=${article.url}>${article.url}</a>
        <p id=${article.id}-author>By: ${article.author}</p>
        <button class='article-button'>Go to Article</button>
    </div>
    `
}

function renderUserNotes(note){
    return `
    <br><br>
    <div id=${note.id}>
        <p>${note.id}</p>
        <p id=${note.id}-title>${note.topic}</p>
        <a id=${note.id}-link>${note.content}</a>
        <button class='note-button'>Go to Note</button>
    </div>
    `
}


