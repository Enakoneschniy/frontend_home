'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.type = undefined;
    }
}

class TV extends Product {
    constructor(name, price, company, diagonal, type) {
        super(name, price);
        this.company = company;
        this.diagonal = diagonal;
        this.type = type;
    }
}

class PC extends Product {
    constructor(name, price, processor, ram, type) {
        super(name, price);
        this.processor = processor;
        this.ram = ram;
        this.type = type;
    }
}

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

let bigTv = new TV("bigTv", 900, "LG", 48, "tvs");
let smalTv = new TV("smalltv", 500, "Samsung", 32, "tvs");

let cheapPC = new PC("cheapPC", 480, "i3", 4, "pcs");
let expensivePC = new PC("expensivePC", 1000, "i9", 16, "pcs");

let products = {
    tvs: [bigTv, smalTv],
    pcs: [cheapPC, expensivePC],
};


let basket = [];

function addProdBasic(i, prodType, ul) {
    let li = document.createElement("li");
    let pPrice = document.createElement("p");
    pPrice.setAttribute("class", "price");
    li.setAttribute("id", prodType[i].name);
    ul.appendChild(li);
    li.appendChild(document.createTextNode(prodType[i].name));
    li.appendChild(pPrice).appendChild(document.createTextNode(`Цена ${prodType[i].price} грн`));
    let div = document.createElement("div");
    div.setAttribute("class", "details");
    li.appendChild(div);

    let addButton = document.createElement("button");
    addButton.setAttribute("class", `addButton  ${prodType[i].type}`);
    addButton.setAttribute("id", `${prodType[i].name}`);

    div.appendChild(addButton).appendChild(document.createTextNode("Добавить в корзину"));

    return div;
}

function showTv() {
    let ul = document.getElementById("listTv");
    for (let i = 0; i < products.tvs.length; i++) {

        let div = addProdBasic(i, products.tvs, ul);

        let pCompany = document.createElement("p");
        pCompany.setAttribute("class", "company");
        let pDiagonal = document.createElement("p");
        pDiagonal.setAttribute("class", "diagonal");

        div.appendChild(pCompany).appendChild(document.createTextNode(`Производитель  ${products.tvs[i].company}`));
        div.appendChild(pDiagonal).appendChild(document.createTextNode(`Диагональ ${products.tvs[i].diagonal} дюймов`));
    }
}


function showPc() {
    let ul = document.getElementById("listPc");
    for (let i = 0; i < products.pcs.length; i++) {

        let div = addProdBasic(i, products.pcs, ul);

        let pProc = document.createElement("p");
        pProc.setAttribute("class", "processor");
        let pRam = document.createElement("p");
        pRam.setAttribute("class", "Ram");

        div.appendChild(pProc).appendChild(document.createTextNode(`Процессор  ${products.pcs[i].processor}`));
        div.appendChild(pRam).appendChild(document.createTextNode(`ОЗУ ${products.pcs[i].ram} ГБ`));
    }
}

showTv();
showPc();

$('.products').on('click', '.addButton', (e) => {
    let id = e.currentTarget.id;
    let prodType = e.currentTarget.classList[1];
    $(`li#${id}`).remove();

    let ul = document.getElementById("listSelected");

    products[prodType].forEach((elem) => {
        if (elem.name === id) {
            basket.push(elem);
            let index = products[prodType].indexOf(elem);
            products[prodType].splice(index, 1);

            let li = document.createElement("li");
            let pPrice = document.createElement("p");
            li.setAttribute("id", elem.name);
            ul.appendChild(li);
            li.appendChild(document.createTextNode(elem.name));
            li.appendChild(pPrice).appendChild(document.createTextNode(`Цена ${elem.price} грн`));

            let removeButton = document.createElement("button");
            removeButton.setAttribute("class", `removeButton  ${elem.type}`);
            removeButton.setAttribute("id", `${elem.name}`);

            li.appendChild(removeButton).appendChild(document.createTextNode("Удалить из корзины"));
        }
    });
    getTotal(basket);
});

$('#listSelected').on('click', '.removeButton', (e) => {
    let id = e.currentTarget.id;
    $(` li#${id}`).remove();

    basket.forEach(elem => {

        if (elem.name === id) {
            products[elem.type].push(elem);
            let index = basket.indexOf(elem);
            basket.splice(index, 1);
            if (elem.type === "tvs") {
                $('#listTv').empty();
                showTv();
            }
            else if (elem.type === "pcs") {
                $('#listPc').empty();
                showPc();
            }
        }
    });

    getTotal(basket)
});

function getTotal(arr) {
    let sum = 0;
    arr.forEach(prod => {
        sum += prod.price;
    });
    $('#total').text(sum);
}





