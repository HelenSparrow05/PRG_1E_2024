// Nákup
var cena = Number(prompt("Zadej cenu jednoho kusu:"));
var pocet = Number(prompt("Kolik kusů chceš koupit?"));
var celkovaCena = cena * pocet;
alert("Za " + pocet + " kusů zaplatíš " + celkovaCena + " korun.");

// Převod hodin na minuty
var hodiny = Number(prompt("Zadej počet hodin:"));
var minuty = hodiny * 60;
alert(hodiny + " hodin je " + minuty + " minut.");

// Převod stupňů Celsia na Fahrenheity
var stupneC = Number(prompt("Zadej teplotu ve stupních Celsia:"));
var stupneF = (stupneC * 9 / 5) + 32;
alert(stupneC + " °C je " + stupneF + " °F.");

// Kalkulačka průměru
var cislo1 = Number(prompt("Zadej první číslo:"));
var cislo2 = Number(prompt("Zadej druhé číslo:"));
var cislo3 = Number(prompt("Zadej třetí číslo:"));
var prumer = (cislo1 + cislo2 + cislo3) / 3;
console.log("Průměr čísel je: " + prumer);

// Převod metrů na kilometry
var metry = Number(prompt("Zadej vzdálenost v metrech:"));
var kilometry = metry / 1000;
alert(metry + " metrů je " + kilometry + " kilometrů.");

// Výpočet věku ve dnech
var roky = Number(prompt("Kolik ti je let?"));
var mesice = Number(prompt("Kolik měsíců navíc?"));
var dny = (roky * 365) + (mesice * 30);
alert("Žiješ přibližně " + dny + " dní.");
