$(document).ready(function() {
    setTimeout(function() {
        var monStockage = localStorage.getItem("id")
        deleteRestiko(monStockage)
    }, 1000);

});


//fonction pour supprimer un restiko
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyL4KoNTaCErNwZv' }).base('appKGZL4PcWPYascf');

function deleteRestiko(restikoId) {
    base('RESTIKO').destroy([], function(err, deletedRecords) {
        // alert("Veux tu réellement supprimer ce Restiko")
        if (err) {

            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}