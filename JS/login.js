
var firebaseUrl = 'https://knjizara-sova-default-rtdb.firebaseio.com';

var login = document.getElementById('prijava1');

login.addEventListener('click', function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

	if (username == '' || password == '') {
        alert("Morate uneti sve podatke za prijavu.")
} else {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var korisnici = JSON.parse(request.responseText);
                name = ''
                for (i in korisnici) {
                    if (korisnici[i]['username'] == username && korisnici[i]['password'] == password) {
                        name = username;
                        location.reload()
                    }
                }
                if (name == '') {
                    alert('Neispravni login podaci.');
                } 
            } 
        }
    };
}
    request.open('GET', firebaseUrl + '/korisnici' + '.json');
    request.send();

});