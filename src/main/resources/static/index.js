function kjopBillett() {
    let film = $("#movie").val();
    let antall = $("#antall").val();
    let fornavn = $("#fornavn").val();
    let etternavn = $("#etternavn").val();
    let epost = $("#epost").val();
    let telefon = $("#telefon").val();

    if (film === ""){
        alert("Velg en film");
        return;
    }
    if (antall === "") {
        alert("Velg antall billetter");
        return;
    }
    if (fornavn === "") {
        alert("Oppgi fornavn");
        return;
    }
    if (etternavn === "") {
        alert("Oppgi etternavn");
        return;
    }

    let telefonRegex = /^\d{8}$/;
    if (!telefonRegex.test(telefon)){
        alert("Oppgi et gyldig telefonnummer");
        return;
    }
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epostRegex.test(epost)){
        alert("Oppgi en gyldig epostadresse");
        return;
    }
    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        telefon: telefon
    };

    $.post("/lagre", billett, function () {
        hentAlle();
    });
    $("#movie").val(" ");
    $("#antall").val(" ");
    $("#fornavn").val(" ");
    $("#etternavn").val(" ");
    $("#epost").val(" ");
    $("#telefon").val(" ");
}
function hentAlle() {
    $.get("/hentAlle", function (billett){
        formaterData(billett);
    });
}
function formaterData(billett) {
    let ut = "<table class='table-striped table-bordered'><tr><th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>E-post</th><th>Telefon</th></tr>"
    for (const bil of billett) {
        ut += "<tr><td>" + bil.film + "</td><td>" + bil.antall + "</td><td>" + bil.fornavn + "</td>" +
            "<td>" + bil.etternavn + "</td><td>" + bil.epost + "</td><td>" + bil.telefon + "</td></tr>";
    }
    ut += "</table>";
    $("#vis").html(ut);
}
function slett() {
    $.get("/slettAlle", function () {
        hentAlle();
    });
}