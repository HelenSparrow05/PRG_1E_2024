//vytvoření proměnné s inicializací
var nazev_promenne = 5;
//dá se zapsat i jako dva řádky
var promenna; //deklarace
promenna = 5; //inicializace

//Primitivní datové typy v javascriptu - number, string, boolean, null, undefined


//cisla
var cislo = 5; //datovy typ number existuje i BigInt pro větší čísla
var cislo = Infinity; //zvláštní druh čísla
var cislo = NaN;// zvláštní druh čísla (většinou vzniká nesmyslnou operací 0/0)


// string se dá zapsat pomocí jednoduchých i složených uvozovek
var string = "ahoj"; //datovy typ string 
var string2 = 'ahoj'; //datovy typ string

//boolean
var pravda = true;
var lez = false;

//null
var nic  = null;//datovy typ null (inicializovaná prázdná hodnota)

//undefined
var nic2 = undefined; //datový typ undefined (neinicializovaná proměnná)
var nic3;//stenjné jako undefined


//Výpis do konzole
console.log("ahoj");

//Výpis alertem 
alert("ahoj");

//Načtení od uživatele
var text = prompt("Zadejte nějaký text:"); //pozor vždy vrátí string

//Matematické operace
var a = Math.pow(2,3);// dva na třetí první se píše základ a pak exponent
var b = Math.sqrt(25);//odmocnina z 25
var c;

c=a+b;
c=a-b;
c=a*b;
c=a/b;
c=a%b;

a++;//přidá k a 1
a+=5;//přidá k a 5

//Přetypování (změna datového typu)
text = Number(text); // vezmu proměnnou text a změním ji ze string na Number
console.log(text*text);


