

fetch('https://dev.to/api/articles/?tag=react')
.then(response => response.json())
.then(json => {
    console.log(json)
    let searchResults = document.getElementById('search-results')
    searchResults.innerHTML = json.map((element) => renderSearchResult(element)).join('')
})

function renderSearchResult(result){
    return `
    <br><br>
    <div id=${result.id}>
        <p>${result.id}</p>
        <p>${result.title}</p>
        <a href=${result.url}>Link to</a>
        <p>By: ${result.user.name}</p>
    </div>
    `
}
