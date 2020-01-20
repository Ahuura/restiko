function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var navbar =
    '<div id="mySidenav" class="sidenav mt-2 mb-2">' +
    '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>' +
    '<a href="index.html">Accueil</a>' +
    '<a href="create.html">Créer un Restiko</a>' +
    '</div>' +
    '<span onclick="openNav()"><h1> Mes Restikos</h1></span>';

$("#navbar").append(navbar)