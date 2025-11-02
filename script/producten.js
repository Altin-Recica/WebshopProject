function updateNaam(event) {
    let searchTerm = event.target.value.toLowerCase();
    let searchResults = [];

    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].producten.length; j++) {
            let productName = categories[i].producten[j].name.toLowerCase();

            if (productName.includes(searchTerm)) {
                searchResults.push(categories[i].producten[j]);
            }else{
                searchResults.push("");
            }
        }
    }

    let productLinks = document.querySelectorAll("main a");

    for (let k = 0; k < productLinks.length; k++) {
        let productLink = productLinks[k];
        let product = productLink.textContent.toLowerCase();

        if (searchResults.length > 0 && !product.includes(searchTerm)) {
            productLink.style.display = "none";
        } else {
            productLink.style.display = "";
        }
    }
}

let naam = document.getElementById("searchbar");
naam.addEventListener("keyup", updateNaam);

function updatePrijs(event) {
    let prijsProducten = [];
    let radioButtonAlles = document.getElementById("pAlles");
    let radioButtonLaag = document.getElementById("pLaag");
    let radioButtonMid = document.getElementById("pMid");
    let radioButtonHoog = document.getElementById("pHoog");

    let minPrice = 0;
    let maxPrice = 30;

    if (radioButtonLaag.checked) {
        minPrice = 10.00;
        maxPrice = 14.99;
    } else if (radioButtonMid.checked) {
        minPrice = 15.00;
        maxPrice = 17.99;
    } else if (radioButtonHoog.checked) {
        minPrice = 18.00;
        maxPrice = 20.00;
    }

    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].producten.length; j++) {
            let prijs = categories[i].producten[j].price;
            let name = categories[i].producten[j].name.toLowerCase();

            if (prijs >= minPrice && prijs <= maxPrice) {
                prijsProducten.push(name);
            }
        }
    }

    let productLinks = document.querySelectorAll("main a");

    for (let k = 0; k < productLinks.length; k++) {
        let productLink = productLinks[k];
        let product = productLink.textContent.toLowerCase();
        let matchFound = false; // Flag to track if a match is found

        if (prijsProducten.length > 0) {
            for (let i = 0; i < prijsProducten.length; i++) {
                if (product.includes(prijsProducten[i])) {
                    matchFound = true;
                    break;
                }
            }
        }

        if (matchFound) {
            productLink.style.display = "";
        } else {
            productLink.style.display = "none";
        }
    }
}
let radioButtons = document.querySelectorAll('input[name="prijs"]');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", updatePrijs);
}

function gesorteerdeNamenOplopend() {
    const ascending = document.getElementById('nOplopend').checked;

    for (let i = 0; i < categories.length; i++) {
        categories[i].producten.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            console.log(ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA));
            return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        const productList = document.querySelector(`.${categories[i].name.toLowerCase()}Producten`);
        productList.innerHTML = '';

        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = categories[i].name;
        productList.appendChild(categoryHeader);

        categories[i].producten.forEach(product => {
            const link = document.createElement('a');
            link.href = product.detailsUrl;
            link.dataset.filter = product.specificaties.kleur;

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = 'X';

            const name = document.createElement('p');
            name.className = 'naam';
            name.textContent = product.name;

            const price = document.createElement('p');
            price.className = 'prijs';
            price.textContent = `Prijs: ${product.price.toFixed(2)}€`;

            link.appendChild(img);
            link.appendChild(name);
            link.appendChild(price);
            productList.appendChild(link);
        });
    }
}
gesorteerdeNamenOplopend();
document.getElementById('nOplopend').addEventListener('change', gesorteerdeNamenOplopend);

function gesorteerdeNamenAflopend() {
    const descending = document.getElementById('nAflopend').checked;

    for (let i = 0; i < categories.length; i++) {
        categories[i].producten.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            console.log(descending ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB));
            return descending ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
        });

        const productList2 = document.querySelector(`.${categories[i].name.toLowerCase()}Producten`);
        productList2.innerHTML = '';

        const categoryHeader2 = document.createElement('h2');
        categoryHeader2.textContent = categories[i].name;
        productList2.appendChild(categoryHeader2);

        categories[i].producten.forEach(product2 => {
            const link = document.createElement('a');
            link.href = product2.detailsUrl;
            link.dataset.filter = product2.specificaties.kleur;

            const img = document.createElement('img');
            img.src = product2.image;
            img.alt = 'X';

            const name = document.createElement('p');
            name.className = 'naam';
            name.textContent = product2.name;

            const price = document.createElement('p');
            price.className = 'prijs';
            price.textContent = `Prijs: ${product2.price.toFixed(2)}€`;

            link.appendChild(img);
            link.appendChild(name);
            link.appendChild(price);
            productList2.appendChild(link);
        });
    }
}

document.getElementById('nAflopend').addEventListener('change', gesorteerdeNamenAflopend);

function gesorteerdPrijsOplopend() {
    const ascending = document.getElementById('pOplopend').checked;

    for (let i = 0; i < categories.length; i++) {
        categories[i].producten.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            return ascending ? priceA - priceB : priceB - priceA;
        });

        const productList3 = document.querySelector(`.${categories[i].name.toLowerCase()}Producten`);
        productList3.innerHTML = '';

        const categoryHeader3 = document.createElement('h2');
        categoryHeader3.textContent = categories[i].name;
        productList3.appendChild(categoryHeader3);

        categories[i].producten.forEach(product3 => {
            const link = document.createElement('a');
            link.href = product3.detailsUrl;
            link.dataset.filter = product3.specificaties.kleur;

            const img = document.createElement('img');
            img.src = product3.image;
            img.alt = 'X';

            const name = document.createElement('p');
            name.className = 'naam';
            name.textContent = product3.name;

            const price = document.createElement('p');
            price.className = 'prijs';
            price.textContent = `Prijs: ${product3.price.toFixed(2)}€`;

            link.appendChild(img);
            link.appendChild(name);
            link.appendChild(price);
            productList3.appendChild(link);
        });
    }
}

document.getElementById('pOplopend').addEventListener('change', gesorteerdPrijsOplopend);

function gesorteerdPrijsAflopend() {
    const descending = document.getElementById('pAflopend').checked;

    for (let i = 0; i < categories.length; i++) {
        categories[i].producten.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;
            return descending ? priceB - priceA : priceA - priceB;
        });

        const productList4 = document.querySelector(`.${categories[i].name.toLowerCase()}Producten`);
        productList4.innerHTML = '';

        const categoryHeader4 = document.createElement('h2');
        categoryHeader4.textContent = categories[i].name;
        productList4.appendChild(categoryHeader4);

        categories[i].producten.forEach(product4 => {
            const link = document.createElement('a');
            link.href = product4.detailsUrl;
            link.dataset.filter = product4.specificaties.kleur;

            const img = document.createElement('img');
            img.src = product4.image;
            img.alt = 'X';

            const name = document.createElement('p');
            name.className = 'naam';
            name.textContent = product4.name;

            const price = document.createElement('p');
            price.className = 'prijs';
            price.textContent = `Prijs: ${product4.price.toFixed(2)}€`;

            link.appendChild(img);
            link.appendChild(name);
            link.appendChild(price);
            productList4.appendChild(link);
        });
    }
}

document.getElementById('pAflopend').addEventListener('change', gesorteerdPrijsAflopend);