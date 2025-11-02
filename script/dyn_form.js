const selectElement = document.getElementById("product-selection");

const optionSplitter = document.createElement("option")
optionSplitter.textContent = "----- Heren -----";
selectElement.appendChild(optionSplitter);

for (let i = 0; i < categories[0].producten.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.textContent = categories[0].producten[i].name;
    selectElement.appendChild(optionElement);
}

const optionSplitter1 = document.createElement("option")
optionSplitter1.textContent = "----- Dames -----";
selectElement.appendChild(optionSplitter1);

for (let i = 0; i < categories[1].producten.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.textContent = categories[1].producten[i].name;
    selectElement.appendChild(optionElement);
}

const optionSplitter2 = document.createElement("option")
optionSplitter2.textContent = "----- Kinderen -----";
selectElement.appendChild(optionSplitter2);

for (let i = 0; i < categories[2].producten.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.textContent = categories[2].producten[i].name;
    selectElement.appendChild(optionElement);
}