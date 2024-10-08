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



