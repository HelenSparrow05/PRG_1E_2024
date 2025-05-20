async function loadData() {
    const resp = await fetch("http://gutendex.com/books/?search=pride")
    const data = await resp.json()
    const books = data.results
    const content = document.getElementById("content")
    for(book of books){
        console.log(book.title)
        const link = document.createElement("a")
        console.log(book.formats["text/html"])
        link.textContent = book.title
        link.href = book.formats["text/html"]
        link.target = "_blank"
        link.classList.add("link")
        content.append(link)
        


    }
    


}

loadData()