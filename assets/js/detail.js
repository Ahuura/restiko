$(document).ready(function() {
    setTimeout(function() {
        var monStockage = localStorage.getItem("id")
        afficherRestiko(monStockage)
    }, 1000);

})

// fonction apour afficher les données dans la page détail
function afficherRestiko(restikoId) {

    base('RESTIKO').find(restikoId, function(err, record) {

        $("#dateDetail").html(record.get("Date"));
        $("#faitDetail").html(record.get("Ce que j'ai fait"));
        $("#apprisDetail").html(record.get("Ce que j'ai appris"));
        $("#aimeDetail").html(record.get("Ce que j'ai aimé"));
        $("#newDetail").html(record.get("Ce que j'ai utilisé de nouveaux"));
        $("#pbDetail").html(record.get("Problématiques  rencontrées"));
        $("#objectifDetail").html(record.get("Quels sont les objectifs ?"));
        $("#manqueDetail").html(record.get("Qu'est-ce qui m'a manqué ?"));
        $("#formateurDetail").html(record.get("Qu'est-ce que tu ferais à la place du formateur ?"));
        $("#atteintDetail").html(record.get("ojectifs atteints ou pas"));
        $("#noteDetail").html(record.get("note/5"));
        $("#aFaireDetail").html(record.get("Ce que je dois faire"));

        if (err) { console.error(err); return; }

    })
};