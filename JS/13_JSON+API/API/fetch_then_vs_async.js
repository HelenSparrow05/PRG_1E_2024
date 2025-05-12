//fetch then - funkční ale zdlouhavé

fetch("https://api.chucknorris.io/jokes/random")
.then(response=>response.json())
.then(data=>{
    console.log(data.value)
})



//async profesionálnější verze
async function nactiData() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json()
    console.log(data.value)
}

nactiData()
