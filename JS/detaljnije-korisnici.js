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
    ime.innerText = korisnik.ime;

    var prezime = document.getElementById('prezime');
    prezime.innerText = korisnik.prezime;

    var ime1 = document.getElementById('ime1');
    ime1.innerText = korisnik.prezime;

    var prezime1 = document.getElementById('prezime1');
    prezime1.innerText = korisnik.prezime;

    var username = document.getElementById('username');
    username.innerText = korisnik.username;

    var datumRodjenja = document.getElementById('datumRodjenja');
    datumRodjenja.innerText = korisnik.datumRodjenja;

    var adresa = document.getElementById('adresa');
    adresa.innerText = korisnik.adresa;

    var telefon = document.getElementById('telefon');
    telefon.innerText = korisnik.telefon;

    var email = document.getElementById('email');
    email.innerText = korisnik.email;

    izmena = document.getElementById("izmena")
    izmena.setAttribute('href', 'izmena-korisnika.html?id=' + id)
}