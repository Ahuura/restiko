$(document).ready(function() {
        var monStockage = localStorage.getItem("id")
        modifRestiko(monStockage)
        submit(monStockage)
 
})

// //fonction pour récupérer les données grâce à restikoId
function modifRestiko(restikoId) {
    var restikoId = localStorage.getItem("id");

    base('RESTIKO').find(restikoId, function(err, record) {

     
        $("#dateModif").val(record.get("Date"));
        $("#faitModif").val(record.get("Ce que j'ai fait"));
        $("#apprisModif").val(record.get("Ce que j'ai appris"));
        $("#aimeModif").val(record.get("Ce que j'ai aimé"));
        $("#newModif").val(record.get("Ce que j'ai utilisé de nouveaux"));
        $("#pbModif").val(record.get("Problématiques  rencontrées"));
        $("#objectifModif").val(record.get("Quels sont les objectifs ?"));
        $("#manqueModif").val(record.get("Qu'est-ce qui m'a manqué ?"));
        $("#formateurModif").val(record.get("Qu'est-ce que tu ferais à la place du formateur ?"));
        $("#atteintModif").val(record.get("ojectifs atteints ou pas"));
        $("#noteModif").val(record.get("note/5"));
        $("#aFaireModif").val(record.get("Ce que je dois faire"));
        if (err) { console.error(err); return; }

    });
};


//fonction pour enregistrer les modifications
function submit(){
    var restikoId = localStorage.getItem("id");
base('RESTIKO').update([
        {
      "id": restikoId,
      "fields": {
        "Date": $('#dateModif').val(),
            "Ce que j'ai aimé": $('#aimeModif').val(),
            "Ce que j'ai fait": $('#faitModif').val(),
            "Ce que j'ai appris": $('#apprisModif').val(),
            "Ce que j'ai utilisé de nouveaux": $('#newModif').val(),
            "Problématiques  rencontrées": $('#pbModif').val(),
            "Quels sont les objectifs ?": $('#objectifModif').val(),
            "Qu'est-ce qui m'a manqué ?": $('#manqueModif').val(),
            "Qu'est-ce que tu ferais à la place du formateur ?": $('#formateurModif').val(),
            "ojectifs atteints ou pas": $('#atteintModif').val(),
            "note/5": $('#noteModif').val(),
            "Ce que je dois faire": $('#aFaireModif').val()
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
    })
  });
}