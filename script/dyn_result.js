

sectionElement = document.createElement('section');

sectionElement.innerHTML = '<div class="productFiche"><h2 class="section">Product: </h2>' +
    '<p id="pNaam">Naam: ...</p>' +
    '<p id="pPrijs">Prijs: ...</p>' +
    '<a href="" id="fotoWrap">' +
    '<img src="../media/productendetail/herenBlauwGroot.png" alt="" id="foto">' +
    '</a><p id="pCategorie">Categorie: ...</p>' +
    '<p id="pKleur">Kleur: ...</p></div>';


mainElement = document.querySelector('main');

mainElement.appendChild(sectionElement);

for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].producten.length; j++) {
        if (product === categories[i].producten[j].name){
            document.getElementById("pNaam").innerHTML = "Naam: " + product;
            document.getElementById("pPrijs").innerHTML = "Prijs: " + categories[i].producten[j].price + "\u20AC";
            document.getElementById("foto").src = categories[i].producten[j].image;
            document.getElementById("fotoWrap").href = categories[i].producten[j].detailsUrl;
            document.getElementById("pCategorie").innerHTML = "Categorie: " + categories[i].name;
            document.getElementById("pKleur").innerHTML = "Kleur: " + categories[i].producten[j].specificaties.kleur;
        }
    }
}