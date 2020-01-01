
document.addEventListener('DOMContentLoaded', function(){
    searchArticles()
    searchButtonListener()
})


function searchArticles(searchTerm){
    console.log(searchTerm)
    fetch(`https://dev.to/api/articles/?tag=${searchTerm}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let searchResults = document.getElementById('search-results')
        searchResults.innerHTML = ""
        searchResults.innerHTML = json.map((element) => renderSearchResult(element)).join('')
        let searchButtons = document.getElementsByClassName('save-button')
        for(let i = 0; i< searchButtons.length; i++){
            searchButtons[i].addEventListener('click', function(e){
                let article = e.target.parentElement
                saveArticle(article)
            })
        }
    })
}

function renderSearchResult(result){
    return `
    <br><br>
    <div id=${result.id}>
        <p>${result.id}</p>
        <p id=${result.id}-title>${result.title}</p>
        <a id=${result.id}-link href=${result.url}>${result.url}</a>
        <p id=${result.id}-author>By: ${result.user.name}</p>
        <button class='save-button'> Save Article</button>
    </div>
    `
}

function searchButtonListener(){
    let searchBox = document.getElementById('search-article-box')
    searchBox.addEventListener('submit', function(e){
        let searchTerm = document.getElementById('search-term').value
        e.preventDefault()
        // console.log(searchTerm)
        searchArticles(searchTerm)
    })
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
    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(json => console.log(json))
}

