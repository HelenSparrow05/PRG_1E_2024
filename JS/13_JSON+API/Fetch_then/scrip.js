fetch("https://hp-api.onrender.com/api/characters")
.then(response =>response.json())
.then(data=>{
    console.log(data[0].name)
    console.log(data[0].image)
    const div = document.getElementById("content")

    for (oneItem of data){
        if(oneItem.image!=""){
            console.log(oneItem.name)
        console.log(oneItem.image)
        
        const card = document.createElement("div")
        card.classList.add("card")
        //vytvoření obrázku
        const img = document.createElement("img")
        img.src = oneItem.image
        img.classList.add("obrazek")

        //vytvoření textu
        const p = document.createElement("p")
        p.textContent = oneItem.name
        p.classList.add("text")

        card.append(img)
        card.append(p)

        div.append(card)
        }
        






    }



})