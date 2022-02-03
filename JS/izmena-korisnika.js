
var fairbaseUrl = 'https://knjizara-sova-default-rtdb.firebaseio.com';

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
        if (this.readyState == 4){
            if (this.status == 200){
            korisnik = {}
            korisnik = JSON.parse(request.responseText);
            podaci();
            }
        }
    }
    request.open('GET', fairbaseUrl + '/korisnici/' + id + '.json');
    request.send();


function podaci(){

    var ime = document.getElementById('ime');
    ime.setAttribute('value', korisnik.ime);

    var prezime = document.getElementById('prezime');
    prezime.setAttribute('value', korisnik.prezime);

    var password = document.getElementById('password');
    password.setAttribute('value', korisnik.password);

    var username = document.getElementById('username');
    username.innerText = korisnik.username;

    var datumRodjenja = document.getElementById('datumRodjenja');
    datumRodjenja.setAttribute('value', korisnik.datumRodjenja);

    var adresa = document.getElementById('adresa');
    adresa.setAttribute('value', korisnik.adresa);

    var telefon = document.getElementById('telefon');
    telefon.setAttribute('value', korisnik.telefon);

    var email = document.getElementById('email');
    email.setAttribute('value', korisnik.email);
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
    alert("Obrisali ste korisnika!")
    obrisi.style.display = 'none';
}

nazad.onclick = function(e){
    e.preventDefault();
    history.back()
}