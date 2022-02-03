function openForm() {
    document.getElementById("login").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("login").style.display = "none";
  }

var firebaseUrl = 'https://knjizara-sova-default-rtdb.firebaseio.com';

var lista_korisnika = [];
var korisnici = {};

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        korisnici = JSON.parse(request.responseText);
        for(var id in korisnici){
            var korisnik = korisnici[id];
            lista_korisnika.push(id);
            ucitajKorisnike(korisnik,id);
        }
        {
            var brisanje = document.getElementById('container')
            brisanje.removeChild(brisanje.firstElementChild)
        }
    }
}

request.open('GET', firebaseUrl + '/korisnici.json');
request.send();

function ucitajKorisnike(korisnik,id) {

    var ime = document.getElementById('ime')
    ime.innerText = korisnik.ime

    var prezime = document.getElementById('prezime')
    prezime.innerText = korisnik.prezime

    detaljnije = document.getElementById("detaljnije")
    detaljnije.setAttribute('href', 'detaljnije-korisnici.html?id=' + id)
    
    let sviKorisnici = document.querySelector('.kutija')
    sviKorisnici.setAttribute('id', id)
    let clone = sviKorisnici.cloneNode(true)
    document.getElementById('container').appendChild(clone)
}