fetch("https://hp-api.onrender.com/api/characters")
    .then(response=>response.json())
    .then(data=>{
        console.log(data[0].image)
        console.log(data[0].name)
        
        const container = document.getElementById("container")

        for(item of data){
            console.log(item.image)
            const obrazek = document.createElement("img")
            obrazek.src = item.image
            obrazek.classList.add("obrazek")
            const jmena = document.createElement("h1")
            jmena.textContent = item.name
            const div = document.createElement("div")
            div.classList.add("divJs")

    
            
            div.append(obrazek)
            div.append(jmena)

            container.append(div)
            
        }
    })