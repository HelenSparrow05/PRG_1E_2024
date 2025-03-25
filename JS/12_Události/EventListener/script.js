
//proměnná typu boolean
var isBlue = false

//document - vyber něco z html souboru
//getElemantById - v tom dokumentu najdi prvek který má takové id
//addEventListener - na tomto prvku poslouchej zda se s ním děje nějaká akce a pokud ano spusť funci
document.getElementById("button").addEventListener("click",()=>{
    if(isBlue){
        document.getElementById("barva").style.backgroundColor = "red"
        isBlue=false
    }else{
        document.getElementById("barva").style.backgroundColor = "blue"
        isBlue=true
    }   
})
