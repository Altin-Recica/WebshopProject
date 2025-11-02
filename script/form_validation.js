
const naam = document.getElementById("naam");
const email = document.getElementById("email");
const errorNaam = document.getElementById("errorNaam")
const errorEmail = document.getElementById("errorEmail")
const productSelection = document.getElementById("product-selection");

let naamValidatie = true; //true als de naam juist is
let emailValidatie = true; //true als de email juist is

function updateNaam(event) {
    let nameValue = document.getElementById("naam").value;
    const trimmedName = nameValue.trim();
    if (nameValue !== trimmedName) {
        naam.classList.remove("groen");
        naam.classList.add("rood");
        errorNaam.innerHTML = "Geen extra spaties"
        naamValidatie = false;
    } else if (nameValue === "") {
        naam.classList.remove("rood");
        naam.classList.remove("groen");
        errorNaam.innerHTML = ""
        naamValidatie = false;
    }else{
        naam.classList.remove("rood");
        naam.classList.add("groen");
        errorNaam.innerHTML = ""
        naamValidatie = true;
    }
}
naam.addEventListener("blur", updateNaam);

function validateEmail(event) {

    let emailInput = document.getElementById("email").value;
    const [naam, domain] = emailInput.split("@");
    const [voornaam, achternaam] = naam.split(".");
    console.log(naam + " + ", domain);
    const regex = /^[^.\s][^.]*\.[^.\s]+(\.[^.\s]+)?$/;
    if ((domain === "kdg.be" || domain === "student.kdg.be") && regex.test(naam)) {
        email.classList.remove("rood");
        email.classList.add("groen");
        errorEmail.innerHTML = ""
        emailValidatie = true;
    } else if (emailInput === "") {
        email.classList.remove("rood");
        email.classList.remove("groen");
        errorEmail.innerHTML = ""
        emailValidatie = false;
    } else {
        email.classList.remove("groen");
        email.classList.add("rood");
        errorEmail.innerHTML = "vn.an@kdg.be/@student.kdg.be"
        emailValidatie = false;
    }
}

email.addEventListener("blur", validateEmail);

document.getElementById("koopForm").addEventListener("submit", function(event) {
    if (0) {
        event.preventDefault();
    }

    const selectedOption = productSelection.value;

    if (selectedOption === "----- Heren -----" || selectedOption === "----- Dames -----" || selectedOption === "----- Kinderen -----" || selectedOption === "Selecteer een product") {
        alert("Please select a product!")
        event.preventDefault();
    }

    if (!naamValidatie){
        alert("Please type a correct name!")
        event.preventDefault();
    }

    if (!emailValidatie){
        alert("Please type a correct email!")
        event.preventDefault();
    }

});