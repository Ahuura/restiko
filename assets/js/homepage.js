//changement du format de la date
$(document).ready(function() {
    var date = "2020-01-17";
    date = date.split('-');
    date = date.reverse();
    date = date.join('-');
});

//airtableTemplate pour récupérer les données dans airtable
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyL4KoNTaCErNwZv' }).base('appKGZL4PcWPYascf');

function initAirtable() {
    base('RESTIKO').select({
        maxRecords: 300000,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {

            //template pour la liste des restiko
            var restiko =
                '<div class=" row fond mb-2" >' +
                '<div class=" col-3">' +
                '<div class="label">Mon Restiko du :  ###date###</div>' +
                '</div>' +
                '<div class=" col-6">' +
                '<div class="label" data-id="###restikoId###" >Ce que je dois faire :  ###aFaire###</div>' +
                '</div>' +
                '<div class=" col-1">' +
                '<div class="btn">' +
                '<button  type="button" onclick="detail(\'###restikoId###\')" class="btn btn-outline-light"> Détails </button>' +
                '</div>' +
                '</div>' +

                '<div class=" col-1">' +
                '<div class="btn">' +
                '<button  type="button" onclick="modif(\'###restikoId###\')" class="btn btn-outline-light"> Modifier </button>' +
                '</div>' +
                '</div>' +

                '<div class=" col-1">' +
                '<div class="btn">' +
                '<button value="reset" type="reset" onclick="deleteRestiko(\'###restikoId###\')" class="btn btn-outline-light"> Supprimer </button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<br>';

            var allrestiko = "";
            allrestiko = restiko.replace("###date###", record.get("Date"));
            allrestiko = allrestiko.replace("###aFaire###", record.get("Ce que je dois faire"));
            allrestiko = allrestiko.replace(/###restikoId###/gi, record.id);
            $("#restiko").append(allrestiko);
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}
initAirtable()


//fonction pour récupérer toutes les données de chaque restiko et le mettre dans la page détail 
function detail(restikoId) {
    console.log("restikoId", restikoId);
    localStorage.setItem("id", restikoId);
    window.location = "detail.html";
}
//fonction pour récupérer toutes les données de chaque restiko et le mettre dans la page modified
function modif(restikoId) {
    console.log("restikoId", restikoId);
    localStorage.setItem("id", restikoId);
    window.location = "modified.html";
}
