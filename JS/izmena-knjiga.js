
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
            }
        }
    }
    request.open('GET', fairbaseUrl + '/knjige/' + id + '.json');
    request.send();

function podaci() {

    var slika = document.getElementById('slika');
    slika.setAttribute('src', knjiga.slika)

    var isbn = document.getElementById('isbn');
    isbn.innerText = knjiga.isbn; 

    var izdavackaKuca = document.getElementById('izdavackaKuca');
    izdavackaKuca.setAttribute('value',knjiga.izdavackaKuca);

    var naziv = document.getElementById('naziv');
    naziv.setAttribute('value',knjiga.naziv);
    
    var autor = document.getElementById('autor');
    autor.setAttribute('value',knjiga.autor);
  
    var jezik = document.getElementById('jezik');
    jezik.setAttribute('value',knjiga.jezik);
  
    var brojStranica = document.getElementById('brojStranica');
    brojStranica.setAttribute('value',knjiga.brojStranica);
  
    var godinaIzdavanja = document.getElementById('godinaIzdavanja');
    godinaIzdavanja.setAttribute('value',knjiga.godinaIzdavanja);
  
    var opis = document.getElementById('opis');
    opis.setAttribute('placeholder',knjiga.opis);
  
    var cena = document.getElementById('cena');
    cena.setAttribute('value',knjiga.cena);
}

var obrisi = document.getElementById('obrisi');

var dugmeObrisi = document.getElementById('dugmeObrisi');

var ne = document.getElementById('ne');

var da = document.getElementById('da');

var nazad = document.getElementById('nazad');

dugmeObrisi.onclick = function(e){
    obrisi.style.display = 'block';
    e.preventDefault();
}

ne.onclick = function(e){
    obrisi.style.display = 'none';
}

da.onclick = function(e){
    alert("Obrisali ste knjigu!")
    obrisi.style.display = 'none';
}

nazad.onclick = function(e){
    e.preventDefault();
    history.back()
}







