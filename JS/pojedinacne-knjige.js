
function openForm() {
    document.getElementById("login").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("login").style.display = "none";
  }


var fairbaseUrl = 'https://knjizara-sova-default-rtdb.firebaseio.com';

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
        if (this.readyState == 4){
            if (this.status == 200){
            knjiga = {}
            knjiga = JSON.parse(request.responseText);
            podaci();
            trenutneOcene();
            noveOcene();
            }
        }
    }
    request.open('GET', fairbaseUrl + '/knjige/' + id + '.json');
    request.send();


function podaci(){
   
  var slika = document.getElementById('slika');
  slika.setAttribute('src',knjiga.slika)

  var isbn = document.getElementById('isbn');
  isbn.innerText = knjiga.isbn; 

  var izdavackaKuca = document.getElementById('izdavackaKuca');
  izdavackaKuca.innerText = knjiga.izdavackaKuca;

  var naziv = document.getElementById('naziv');
  naziv.innerText = knjiga.naziv;
  
  var autor = document.getElementById('autor');
  autor.innerText = knjiga.autor;

  var jezik = document.getElementById('jezik');
  jezik.innerText = knjiga.jezik;

  var pismo = document.getElementById('pismo');
  pismo.innerText = knjiga.pismo;

  var brojStranica = document.getElementById('brojStranica');
  brojStranica.innerText = knjiga.brojStranica;

  var tipPoveza = document.getElementById('tipPoveza');
  tipPoveza.innerText = knjiga.tipPoveza;

  var godinaIzdavanja = document.getElementById('godinaIzdavanja');
  godinaIzdavanja.innerText = knjiga.godinaIzdavanja;

  var opis = document.getElementById('opis');
  opis.innerText = knjiga.opis;

  var cena = document.getElementById('cena');
  cena.innerText = knjiga.cena;

  var ocena = document.getElementById('ocena');
  ocena.innerText = "(" + knjiga.ocena + "/" + "5)";

  izmena = document.getElementById("izmena")
  izmena.setAttribute('href', 'izmena-knjiga.html?id=' + id)
}

var ocena = document.getElementById('ocena');
var ocena_1 = document.getElementById('ocena-1');
var ocena_2 = document.getElementById('ocena-2');
var ocena_3 = document.getElementById('ocena-3');
var ocena_4 = document.getElementById('ocena-4');
var ocena_5 = document.getElementById('ocena-5');
var ocena1 = document.getElementById('ocena1');
var ocena2 = document.getElementById('ocena2');
var ocena3 = document.getElementById('ocena3');
var ocena4 = document.getElementById('ocena4');
var ocena5 = document.getElementById('ocena5');


function trenutneOcene(){
  if (knjiga.ocena == 1){
    ocena1.style.color = '#fd4'
    ocena2.style.color = '#444'
    ocena3.style.color = '#444'
    ocena4.style.color = '#444'
    ocena5.style.color = '#444'
  }
  if (knjiga.ocena == 2){
    ocena1.style.color = '#fd4'
    ocena2.style.color = '#fd4'
    ocena3.style.color = '#444'
    ocena4.style.color = '#444'
    ocena5.style.color = '#444'
  }

  if (knjiga.ocena == 3){
    ocena1.style.color = '#fd4'
    ocena2.style.color = '#fd4'
    ocena3.style.color = '#fd4'
    ocena4.style.color = '#444'
    ocena5.style.color = '#444'
  }

  if (knjiga.ocena == 4){
    ocena1.style.color = '#fd4'
    ocena2.style.color = '#fd4'
    ocena3.style.color = '#fd4'
    ocena4.style.color = '#fd4'
    ocena5.style.color = '#444'
  }

  if (knjiga.ocena == 5){
    ocena1.style.color = '#fd4'
    ocena2.style.color = '#fd4'
    ocena3.style.color = '#fd4'
    ocena4.style.color = '#fd4'
    ocena5.style.color = '#fd4'
  }
}

function noveOcene(){
  ocena_1.onclick = function(e){
    alert("Ocenili ste knjigu sa ocenom 1!")
    console.log("Ocenili ste knjigu ocenom 1!")
  }

  ocena_2.onclick = function(e){
    alert("Ocenili ste knjigu sa ocenom 2!")
    console.log("Ocenili ste knjigu ocenom 2!")
  }

  ocena_3.onclick = function(e){
    alert("Ocenili ste knjigu sa ocenom 3!")
    console.log("Ocenili ste knjigu ocenom 3!")
  }

  ocena_4.onclick = function(e){
    alert("Ocenili ste knjigu sa ocenom 4!")
    console.log("Ocenili ste knjigu ocenom 4!")
  }

  ocena_5.onclick = function(e){
    alert("Ocenili ste knjigu sa ocenom 5!")
    console.log("Ocenili ste knjigu ocenom 5!")
  }
}


ocena1.onmouseover = function() {mouseOver1()};
ocena1.onmouseout = function() {mouseOut1()};

function mouseOver1() {
  ocena1.style.color = '#fd4';
  ocena2.style.color = '#444';
  ocena3.style.color = '#444';
  ocena4.style.color = '#444';
  ocena5.style.color = '#444';
}

function mouseOut1(){
  trenutneOcene();
}

ocena2.onmouseover = function() {mouseOver2()};
ocena2.onmouseout = function() {mouseOut2()};

function mouseOver2() {
  ocena1.style.color = '#fd4';
  ocena2.style.color = '#fd4';
  ocena3.style.color = '#444';
  ocena4.style.color = '#444';
  ocena5.style.color = '#444';
}

function mouseOut2(){
  trenutneOcene();
}

ocena3.onmouseover = function() {mouseOver3()};
ocena3.onmouseout = function() {mouseOut3()};

function mouseOver3() {
  ocena1.style.color = '#fd4';
  ocena2.style.color = '#fd4';
  ocena3.style.color = '#fd4';
  ocena4.style.color = '#444';
  ocena5.style.color = '#444';
}

function mouseOut3(){
  trenutneOcene();
}

ocena4.onmouseover = function() {mouseOver4()};
ocena4.onmouseout = function() {mouseOut4()};

function mouseOver4() {
  ocena1.style.color = '#fd4';
  ocena2.style.color = '#fd4';
  ocena3.style.color = '#fd4';
  ocena4.style.color = '#fd4';
  ocena5.style.color = '#444';
}

function mouseOut4(){
  trenutneOcene();
}

ocena5.onmouseover = function() {mouseOver5()};
ocena5.onmouseout = function() {mouseOut5()};

function mouseOver5() {
  ocena1.style.color = '#fd4';
  ocena2.style.color = '#fd4';
  ocena3.style.color = '#fd4';
  ocena4.style.color = '#fd4';
  ocena5.style.color = '#fd4';
}

function mouseOut5(){
  trenutneOcene();
}
