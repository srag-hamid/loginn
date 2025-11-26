document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let fornavn = document.getElementById("fornavn").value.trim();
    let etternavn = document.getElementById("etternavn").value.trim();
    let message = document.getElementById("message");

    const riktigFornavn = "Srag";
    const riktigEtternavn = "Hamid";

    if (fornavn === riktigFornavn && etternavn === riktigEtternavn) {
        message.style.color = "green";
        message.textContent = "Velkommen Srag Hamid!";
    } else {
        alert("feil logg inn info");
        //message.style.color = "red";
        //message.textContent = "Logg inn info er feil!";
    }
}); 

