function openForm() {
    document.getElementById("login").style.display = "block";
}  
  function closeForm() {
    document.getElementById("login").style.display = "none";
}
  function openFormSignin() {
    document.getElementById("signin").style.display = "block";
} 
  function closeFormSignin() {
    document.getElementById("signin").style.display = "none";
}




var firebaseUrl = 'https://knjizara-sova-default-rtdb.firebaseio.com';

var lista_knjiga = [];
var knjige = {};

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        lista_knjiga = []
        knjige = JSON.parse(request.responseText);
        console.log(knjige)
        for(var id in knjige){
            var knjiga = knjige[id];
            lista_knjiga.push(id);
            ucitajKnjige(knjiga,id);
        }
        {
            var brisanje = document.getElementById('sve')
            brisanje.removeChild(brisanje.firstElementChild)
        }
    }
}
request.open('GET', firebaseUrl + '/knjige' + '.json');
request.send();

function ucitajKnjige(knjiga,id) {
    
    var autor = document.getElementById('autor')
    autor.innerText = knjiga.autor

    var naziv = document.getElementById('nazivID')
    naziv.innerText = knjiga.naziv
    link = document.getElementById('link')
    link.setAttribute('href', 'knjige.html?id=' + id)

    var slika = document.getElementById('slika')
    slika.setAttribute('src', knjiga.slika)
    linkSlike = document.getElementById('linkSlike')
    linkSlike.setAttribute('href', 'knjige.html?id=' + id)

    var cena = document.getElementById('cena')
    cena.innerText = knjiga.cena

    let sveKnjige = document.querySelector('.kutija')
    sveKnjige.setAttribute('id',id)

    var ocena = document.getElementById('ocena');
    ocena.innerText = "(" + knjiga.ocena + "/" + "5)";
    
    var ocena1 = document.getElementById('ocena1');
    var ocena2 = document.getElementById('ocena2');
    var ocena3 = document.getElementById('ocena3');
    var ocena4 = document.getElementById('ocena4');
    var ocena5 = document.getElementById('ocena5');

    if (knjiga.ocena == "1"){
      ocena1.style.color = '#fd4'
      ocena2.style.color = '#444'
      ocena3.style.color = '#444'
      ocena4.style.color = '#444'
      ocena5.style.color = '#444'
    }
    if (knjiga.ocena == "2"){
      ocena1.style.color = '#fd4'
      ocena2.style.color = '#fd4'
      ocena3.style.color = '#444'
      ocena4.style.color = '#444'
      ocena5.style.color = '#444'
    }
  
    if (knjiga.ocena == "3"){
      ocena1.style.color = '#fd4'
      ocena2.style.color = '#fd4'
      ocena3.style.color = '#fd4'
      ocena4.style.color = '#444'
      ocena5.style.color = '#444'
    }
  
    if (knjiga.ocena == "4"){
      ocena1.style.color = '#fd4'
      ocena2.style.color = '#fd4'
      ocena3.style.color = '#fd4'
      ocena4.style.color = '#fd4'
      ocena5.style.color = '#444'
    }
  
    if (knjiga.ocena == "5"){
      ocena1.style.color = '#fd4'
      ocena2.style.color = '#fd4'
      ocena3.style.color = '#fd4'
      ocena4.style.color = '#fd4'
      ocena5.style.color = '#fd4'
    }

    let clone = sveKnjige.cloneNode(true)
    document.getElementById('sve').appendChild(clone)
  }



