const currentUrl = window.location.href;

const url = new URL(currentUrl);
const searchParams = url.searchParams;

const naam = searchParams.get("naam");
const email = searchParams.get("email");
const nummer = searchParams.get("nummer");
const straat = searchParams.get("street");
const postcode = searchParams.get("zipcode");
const stad = searchParams.get("city");
const product = searchParams.get("product-selection");
const personalisatieText = searchParams.get("personalising-text");
const tekstKleur = searchParams.get("tekstKleur");
const maat = searchParams.get("t-shirt-size");

document.getElementById("orderNr").innerHTML = "Order #1";
document.getElementById("naam").innerHTML = "Naam: " + naam;
document.getElementById("email").innerHTML = "Email: " + email;
document.getElementById("nummer").innerHTML = "Tel Nummer: " + nummer;
document.getElementById("straat").innerHTML = "Straat en nr: " + straat;
document.getElementById("postcode").innerHTML = "Postcode: " + postcode;
document.getElementById("stad").innerHTML = "Stad: " + stad;
document.getElementById("tekst").innerHTML = "Tekst: " + personalisatieText;
document.getElementById("tekstKleur").innerHTML = "Tekst kleur: " + tekstKleur;
document.getElementById("maat").innerHTML = "Maat: " + maat;