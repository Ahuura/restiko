function confirmer() {
    event.preventDefault();
    base('RESTIKO').create([{
        "fields": {
            "Date": $('#dateCreate').val(),
            "Ce que j'ai aimé": $('#aimeCreate').val(),
            "Ce que j'ai fait": $('#faitCreate').val(),
            "Ce que j'ai appris": $('#apprisCreate').val(),
            "Ce que j'ai utilisé de nouveaux": $('#newCreate').val(),
            "Problématiques  rencontrées": $('#pbCreate').val(),
            "Quels sont les objectifs ?": $('#objectifCreate').val(),
            "Qu'est-ce qui m'a manqué ?": $('#manqueCreate').val(),
            "Qu'est-ce que tu ferais à la place du formateur ?": $('#formateurCreate').val(),
            "ojectifs atteints ou pas": $('#atteintCreate').val(),
            "note/5": $('#noteCreate').val(),
            "Ce que je dois faire": $('#aFaireCreate').val()

        }
    }], function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function(record) {
            console.log(record.getId());
            window.location = "index.html"
        });
    });
}