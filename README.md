# Obsah
- [Základní pojmy v oblasti www](#z%C3%A1kladn%C3%AD-pojmy-v-oblasti-www)
  - [Internet](#internet)
  - [Webová stránka](#webov%C3%A1-str%C3%A1nka)
  - [Webový prohlížeč](#webov%C3%BD-prohl%C3%AD%C5%BEe%C4%8D)
  - [Webový server](#webov%C3%BD-server)
  - [Odpovědi serveru](#odpov%C4%9Bdi-serveru)
  - [HTTP/HTTPS](#httphttps)
  - [Doména](#dom%C3%A9na)
  - [Webhosting](#webhosting)
  - [Redakční systémy](#redak%C4%8Dn%C3%AD-syst%C3%A9my)
  - [FTP](#ftp)
  - [HTML dokument](#html-dokument)
  - [WhoIs](#whois)
- [GitHub](#github)
  - [Git](#git)
  - [Nejznámější poskytovatelé vzdálených repozitářů](#nejzn%C3%A1m%C4%9Bj%C5%A1%C3%AD-poskytovatel%C3%A9-vzd%C3%A1len%C3%BDch-repozit%C3%A1%C5%99%C5%AF)
  - [Nejdůležitější příkazy](#nejd%C5%AFle%C5%BEit%C4%9Bj%C5%A1%C3%AD-p%C5%99%C3%ADkazy)
- [HTML](#html)
- [CSS](#css)
  - [CSS – princip a syntaxe](#css--princip-a-syntaxe)
  - [CSS – selektory](#css--selektory)
  - [CSS – barvy](#css--barvy)
  - [CSS – písma](#css--písma)
  - [CSS – Box Model](#css--box-model)
  - [CSS – layout](#css--layout)
  - [CSS – animace](#css--animace)
- [JavaScript](#javascript)
  - [JavaScript – princip a syntaxe](#javascript--princip-a-syntaxe)
  - [JavaScript – proměnné](#javascript--proměnné)
  - [JavaScript – větvení](#javascript--větvení)
  - [JavaScript – cykly](#javascript--cykly)
  - [JavaScript – funkce](#javascript--funkce)
  - [JavaScript – události](#javascript--události)


# Základní pojmy v oblasti www
## Internet
* Globální síť propojených počítačů, která umožňuje komunikaci a výměnu dat mezi uživateli na celém světě
* Síť spojující sítě
## Webová stránka
* Je jeden z mnoha způsobů, jakým lze využít internet
* Webová stránka je dokument, který obsahuje text, obrázky, videa, odkazy a další prvky, které mohou být zobrazeny pomocí webového prohlížeče
* Webová stránka je už interpretovaný HTML dokument otevřený v nějakém webovém prohlížeči.

## Webový prohlížeč
* Program, který umožňuje uživatelům prohlížet webové stránky v grafické podobě
* Prohlížeč stahuje HTML dokumenty a další soubory, které jsou součástí webové stránky, a poté je zobrazuje na obrazovce uživatele
* Mezi nejpopulárnější webové prohlížeče patří Google Chrome, Mozilla Firefox, Microsoft Edge a Apple Safari
  
![image](https://github.com/user-attachments/assets/ebeb173d-f972-4091-9259-e5c4b3599c1d)
![image](https://github.com/user-attachments/assets/f8c0cf88-a85f-4716-87f2-2e1338e6754b)
![image](https://github.com/user-attachments/assets/0f2a5e7c-be9a-469c-b3cc-cc5173c16491)


## Webový server
* Zde jsou uloženy stránky, ke kterým se dostanu pomocí požadavků (http, https).
* Počítačový systém, který poskytuje webové stránky uživatelům
* Když uživatel zadá do webového prohlížeče adresu webové stránky, prohlížeč pošle požadavek na webový server, který poté odešle HTML dokumenty a další soubory zpět na uživatelem používaný počítač
* Běží na specializovaném softwaru např.: Apache nebo Nginx
  
## Odpovědi serveru
* Při odeslání požadavku na server se nám vrátí odpověď.
* Tato odpověď přijde ve formě kódu např.: 10x (stovkové) a za x se doplňují jednotlivé kódy
* [Přesný seznam kódů](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* Obecné kódy
  * 100 – Continue
  * 200 – Ok
  * 300 – Redirect
  * 400 – Chyba na straně uživatele
  * 500 – Chyba serveru
* Nejznámější chybové kódy
  * 403 - Forbidden
  * 404 – Not found


## HTTP/HTTPS
* Hypertext Transfer Protocol
* Je základním protokolem, který se používá pro přenos dat mezi webovým prohlížečem a webovým serverem
* HTTP umožňuje prohlížeči odesílat požadavky na server, například požadavek na konkrétní stránku nebo soubor, a server poté na tyto požadavky odpovídat, například odesláním HTML dokumentu nebo jiného souboru
* HTTP - nešifrovaná varianta, data se posílají jako normální text
* HTTPS - šifrovaná varianta, data se posílají v zašifrované podobě
  
> [!CAUTION]
> Není vhodné na HTTP stránkách vyplňovat formuláře a odesílat osobní data.
> Vše co se odešle bude posláno nezašifrovaně.

* Protokol lze zjistit na začátku url adresy

 ![image](https://github.com/user-attachments/assets/e37e9b77-6bd9-4bcf-8782-429e85272284)

## Doména
* Doménové jméno
  
![image](https://github.com/user-attachments/assets/ed1cb7a2-33d6-4856-b776-96c161291241)

* První řád - .cz .com .sk .eu
* Druhý řád - infis seznam google
* Třetí řád(subdoména) - www(world wide web) portal
* Subdomén může být pod určitou doménou více

## Webhosting
* Webhosting je pronájem prostoru pro webové stránky na cizím serveru.
  
## Redakční systémy
*Systémy umožňující vytvořit webovou stránku rychleji bez velkých programátorských znalostí
* Nejznámější redakční systémy
  * Wordpress
    
    ![image](https://github.com/user-attachments/assets/14e8b9d1-2a8a-460d-b2d4-46a5d8f74b06)


  * Joomla
    
    ![image](https://github.com/user-attachments/assets/e1653ff6-bec6-4663-867e-7b91c2677670)

## FTP
* File Transfer Protocol
* Slouží k přenosu souborů od uživatele na webový server.

## HTML Dokument
* Jedná se o textový soubor obsahující kódování, které určuje strukturu, vzhled a funkce webové stránky


## WhoIs
* Označení pro databázi, která slouží k evidenci údajů o majitelích internetových domén.
* Všechny domény v České republice registruje CZ.NIC

## SEO
* Search engine optimization
* Cílem je kód optimalizovat tak aby se určená URL zobrazovala na předních místech vyhledávačů

# GitHub
## Git
* [Podrodné informace](https://www.itnetwork.cz/programovani/git/git-tutorial-historie-a-principy)
* verzovací systém určený ke sledování změn v souborech a ke koordinaci práce mezi lidmi na různých verzích těchto souborů
* Stav projektu ukládáme do verzí.
* Git poskytuje podporu pro zpětnou rekonstrukci změn a snadný přechod mezi verzemi.
* Repozitář - hlavní prvek gitu, místo ke jsou uloženy soubory, předchozí verze a další metadata

![image](https://github.com/user-attachments/assets/f68012bd-adf1-42cd-95e6-2db601ec897a)

  
![image](https://github.com/user-attachments/assets/be72c64a-fdbc-4e40-8584-4aa8a051e3ae)

## Nejznámější poskytovatelé vzdálených repozitářů
* GitHub
  
  ![image](https://github.com/user-attachments/assets/8daf71b9-3ba2-42df-bbb6-f421c26b14aa)

* GitLab

  ![image](https://github.com/user-attachments/assets/76e1c91f-c388-458f-9880-ba284ccdc768)

## Nejdůležitější příkazy
### Nastavení jména a emailu
* git config --global user.name
* git config --global user.email
### Pro vložení
* git add
* git commit -m "message"
* git push
### Pro stažení k sobě
* git clone
## GitHub README.md
* Je to v rámci github repozitáře soubor, který se používá jako dokumentace
* <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">Základní syntaxe jak psát README.md</a>
## GitHub Pages
* GitHub jako takový, poskytuje velmi jednoduchý hosting pro vaše webové stránky
* Když je repozitář public stačí jít do Settings-Pages a zde vybrat větev a uložit
# HTML
* Hypertext Markup Language – značkovací jazyk
* Základní jazyk pro tvorbu webových stránek
* Účel je psaní html dokumentů a jejich účelem je zobrazení ve webovém prohlížeči
* Snaha popsat strukturu a obsah webové stránky pomocí speciálních značek (tagů), které umožňují prohlížeči interpretovat obsah stránky a zobrazit ji v grafické podobě pro uživatele
* Konkrétně HTML definuje strukturu stránky – nadpisy, texty, odkazy, obrázky, tabulky a další prvky. Tyto prvky jsou pak dále formátovány pomocí dalších technologií, jako je CSS (Cascading Style Sheets) nebo    JavaScript, aby byly webové stránky interaktivní pro uživatele
## HTML Tagy
* Toto je html element a je tvořen pomocí jednotlivých tagů

<img src="https://github.com/user-attachments/assets/352b9bbd-cf40-4d0c-ba39-ed1bc63084ca" width="20%">

* Tagy zapisujeme pomocí špičatých závorek a do nich název tagu <>
* Dělíme je na:
  * párové - mají počátecní a ukončovací tag (<p></p> ukončovací tag se zapisuje stejně jako počáteční jenom je za první špičatou závorkou lomeno)
  * nepárové mají pouze začáteční tag
### Základní tagy
```
<!DOCTYPE html> - Slouží k tomu aby prohlížeč rozpoznal html dokument, nepárový

<html></html> - Slouží k vymezení prostoru kde budeme psát html tagy, párový

<head></head> - K definování obsahu který se nezobrazí na stránce

<body></body> - K definování obsahu který se zobrazí na stránce
```

```
<p> - text, párový

<h1> až <h6> - nadpisy h1 je největší a h6 nejmenší , párový

<a href="URL">Text odkazu</a> - odkaz, párový

<ul> - odrázkovitý seznam, párový

<ol> - číselný seznam, párový

<li> - jednotlivé položky seznamu, párový

<img src="cesta_k_obrazku" alt="popis"> - obrázek, nepárový"

<!-- Komentář -->
```
## HTML Atributy
 * K upřesnění html elementu


```html
<!-- příklad -->
<img src="cesta_k_obrazku" alt="popis">
<!-- zde je atribut src="cesta_k_obrazku" a druhý atribut je alt="popis"-->
```

* zapisuje se jako: nazev=""


# CSS – princip a syntaxe

## Co je CSS?  
CSS (*Cascading Style Sheets* – kaskádové styly) je jazyk, který se používá k úpravě vzhledu HTML stránek. Pomocí CSS můžeme změnit barvu textu, nastavit velikost písma, přidat rámečky, upravit mezery mezi prvky nebo dokonce přidat animace.  

CSS se zapisuje zvlášť mimo HTML kód a propojuje se pomocí `<link>` nebo se vkládá přímo do HTML souboru pomocí `<style>`.

## Jak vypadá CSS kód?  
Každé pravidlo v CSS se skládá z **selektoru**, **vlastnosti** a **hodnoty**.

```css
selektor {
    vlastnost: hodnota;
}
```

- **Selektor** – vybere HTML prvek, kterému chceme změnit styl (např. `h1`, `.nadpis`, `#logo`).
- **Vlastnost** – určuje, co se má změnit (např. `color`, `font-size`, `background-color`).
- **Hodnota** – nastaví konkrétní změnu (např. `red`, `20px`, `blue`).

### Příklad použití:
```css
p {
    color: blue; /* Změní barvu textu na modrou */
    font-size: 18px; /* Nastaví velikost písma na 18 pixelů */
}
```

Tento kód říká:  
**Všem `<p>` odstavcům změň barvu na modrou a nastav velikost písma na 18 pixelů.**

---

# CSS – selektory

Selektory slouží k výběru HTML prvků, na které se bude aplikovat CSS styl.

##  Základní selektory  
### Elementový selektor  
Vybírá všechny prvky daného typu (např. všechny `<p>` odstavce).  

```css
p {
    color: green; /* Všechny odstavce budou zelené */
}
```

### Třídový selektor (`.`)  
Vybírá prvky, které mají danou třídu (`class`).  

```css
.nadpis {
    font-weight: bold; /* Tučné písmo */
    color: red; /* Červená barva */
}
```
```html
<h1 class="nadpis">Toto je nadpis</h1>
<p class="nadpis">Toto je odstavec s červeným textem</p>
```
**Všechny prvky s `class="nadpis"` budou červené a tučné.**

### ID selektor (`#`)  
Vybírá jediný konkrétní prvek podle jeho ID (`id`).  

```css
#hlavni-text {
    font-size: 24px;
    text-align: center;
}
```
```html
<p id="hlavni-text">Toto je speciální text.</p>
```
**Používáme pro unikátní prvky, které jsou na stránce jen jednou.**  

---

## Pokročilé selektory  
### Potomek (` `)  
Vybírá prvky uvnitř jiného prvku.  

```css
div p {
    color: purple;
}
```
```html
<div>
    <p>Tento text bude fialový.</p>
</div>
<p>Tento text NEbude fialový.</p>
```
**Pouze odstavce uvnitř `<div>` budou fialové.**

### Přímý potomek (`>`)  
Vybírá jen prvky, které jsou hned uvnitř rodiče.  

```css
div > p {
    color: orange;
}
```
```html
<div>
    <p>Tento odstavec bude oranžový.</p>
    <span>
        <p>Tento už oranžový nebude.</p>
    </span>
</div>
```
**Pouze `<p>`, které jsou přímo uvnitř `<div>`, změní barvu.**

### Souslednost (`+`)  
Vybírá prvek, který následuje hned za jiným.  

```css
h1 + p {
    color: pink;
}
```
```html
<h1>Nadpis</h1>
<p>Tento odstavec bude růžový.</p>
<p>Tento už ne.</p>
```
**Pouze první `<p>` za `<h1>` bude růžový.**

---

# Co si z toho vzít?
**Selektor** vybírá HTML prvek, kterému chceme změnit styl.  
**Vlastnost** určuje, co se mění (barva, velikost písma, okraje).  
**Hodnota** definuje, jak se to změní (např. `red`, `20px`, `bold`).  

---

# Příklad použití 
Vytvořte jednoduchý HTML soubor.  
Přidejte do něj `<style>` a zkuste změnit barvy a písmo pomocí různých selektorů.  

```html
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moje první CSS</title>
    <style>
        body {
            background-color: lightgrey;
        }
        h1 {
            color: blue;
            text-align: center;
        }
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Ahoj, svět!</h1>
    <p>Tento text bude zelený.</p>
</body>
</html>
```

## CSS – barvy
Barvy lze zadávat několika způsoby:
- Název barvy (`red`, `blue`)
- HEX kód (`#ff5733`)
- RGB (`rgb(255, 87, 51)`)
- HSL (`hsl(10, 100%, 50%)`)

### Příklad:
```css
h1 {
    color: #ff5733;  /* Změní barvu textu*/
    background-color: rgba(0, 0, 0, 0.1); /* Změní barvu pozadí*/
}
```

---

# **CSS – Box Model**

## **Co je Box Model?**
V CSS se každý prvek na stránce chová jako obdélník a skládá se z těchto částí:
1. **Obsah (Content)** – hlavní část prvku, obsahuje text nebo obrázek.
2. **Vnitřní odsazení (Padding)** – mezera mezi obsahem a rámečkem.
3. **Okraj (Border)** – rámeček kolem prvku.
4. **Vnější odsazení (Margin)** – mezera mezi prvkem a okolními prvky.

### **Schéma Box Modelu:**
```
+--------------------------+
|        Margin            |
|  +--------------------+  |
|  |      Border        |  |
|  |  +------------+  |  |
|  |  |  Padding  |  |  |
|  |  | Content   |  |  |
|  |  +------------+  |  |
|  +--------------------+  |
+--------------------------+
```

### **Příklad kódu:**
```css
.box {
    width: 200px;
    padding: 10px;
    border: 3px solid black;
    margin: 20px;
    background-color: lightblue;
}
```

---

# **CSS – Responzivní design**

Responzivní design umožňuje, aby se webová stránka přizpůsobila různým velikostem obrazovek (mobil, tablet, PC).  

## **Media Queries**
Media Queries umožňují změnit styl podle velikosti obrazovky.

### **Příklad:**
```css
@media (max-width: 600px) {
    body {
        background-color: lightgrey;
    }
}
```
**Pokud je šířka obrazovky menší než 600px, změní se pozadí na šedé.**

## **Flexibilní rozměry**
Místo pevných hodnot (`px`) používáme relativní jednotky jako `%`, `vw`, `vh` nebo `em`.

### **Příklad:**
```css
.container {
    width: 80%;  /* Přizpůsobí se velikosti okna */
    max-width: 1200px;  /* Maximální šířka */
}
```

---

# **CSS – Grid Layout**

CSS Grid je moderní způsob, jak tvořit rozvržení stránky v mřížce.

## **Vytvoření mřížky**
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* 3 sloupce */
    grid-template-rows: auto auto; /* 2 řádky */
    gap: 10px; /* Mezery mezi prvky */
}
```

## **Umístění prvků**
```css
.item1 {
    grid-column: 1 / 3; /* Prvek zabere dva sloupce */
    grid-row: 1; /* Umístění v prvním řádku */
}
```

### **HTML struktura:**
```html
<div class="container">
    <div class="item1">První</div>
    <div class="item2">Druhý</div>
    <div class="item3">Třetí</div>
</div>
```

---

# **CSS – Flow Layout**

Flow Layout je přirozené chování prvků na stránce.

## **Blokové vs. řádkové prvky**
- **Blokové prvky** (`div`, `p`, `h1`) zabírají celou šířku.
- **Řádkové prvky** (`span`, `a`) se řadí vedle sebe.

## **Float**
Float umožňuje obtékání obsahu.
```css
img {
    float: right; /* Obrázek bude napravo */
}
```

## **Flexbox**
Flexbox umožňuje lépe zarovnávat prvky v řádku nebo sloupci.
```css
.container {
    display: flex;
    justify-content: space-between; /* Prvky budou od sebe */
}
```

---

# **CSS – Animace**

CSS umožňuje jednoduché animace pomocí `@keyframes`.

## **Základní animace**
```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.box {
    animation: fadeIn 2s ease-in-out;
}
```

## **Transformace**
```css
.box:hover {
    transform: rotate(10deg);
}
```

## **Přechody**
```css
.button {
    transition: background-color 0.5s ease-in-out;
}
.button:hover {
    background-color: red;
}
```
**Po najetí myší se tlačítko plynule změní na červené.**

---

# JavaScript

## JavaScript – princip a syntaxe
JavaScript je skriptovací jazyk umožňující dynamické úpravy webových stránek. Kód lze spustit v prohlížeči.

### Příklad:
```js
console.log("Ahoj, světe!");
alert("Vítejte na stránce!");
```

---

## JavaScript – proměnné
Proměnné uchovávají data a mohou být deklarovány pomocí `var`, `let` nebo `const`.

### Příklad:
```js
let jmeno = "Pavel";
const vek = 25;
console.log(jmeno + " má " + vek + " let.");
```

---

## JavaScript – větvení
Podmínky umožňují rozhodování v programu.

### Příklad:
```js
let cislo = 10;
if (cislo > 5) {
    console.log("Číslo je větší než 5");
} else {
    console.log("Číslo je 5 nebo menší");
}
```

---

## JavaScript – cykly
Cyklus umožňuje opakované provedení kódu.

### Příklad:
```js
for (let i = 1; i <= 5; i++) {
    console.log("Číslo: " + i);
}
```

---

## JavaScript – funkce
Funkce umožňují znovupoužití kódu.

### Příklad:
```js
function pozdrav(jmeno) {
    return "Ahoj, " + jmeno + "!";
}
console.log(pozdrav("Pavle"));
```

---

## JavaScript – události
Události reagují na interakci uživatele, například kliknutí.

### Příklad:
```html
<button onclick="alert('Kliknuto!')">Klikni mě</button>
```

---





