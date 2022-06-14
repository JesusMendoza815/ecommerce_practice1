const newProduct = (urlImg, title, description, price) => {
    let text = "Go somewhere"
    // CREATE ELEMENT
    let container = document.querySelector("#collection");
    let card = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardDescription = document.createElement("p");
    let cardPrice = document.createElement("h6");
    let cardLink = document.createElement("a");

    // ADD CLASS AND ASSIGNMENT
    card.classList.add("col-12", "col-md-3","w-auto", "card", "m-1");
    cardImg.classList.add("card-img-top");
    cardBody.classList.add("card-body", "text-center");
    cardTitle.classList.add("card-title");
    cardDescription.classList.add("card-text");
    cardPrice.classList.add("card-price");
    cardLink.classList.add("btn", "btn-mod");

    //ADD TEXT AND SRC
    cardImg.src = urlImg;
    cardTitle.innerText = title;
    cardDescription.innerText = description;
    cardPrice.innerText = `$${price}`;
    cardLink.innerText = text;


    //APEND CHILD
    // cardLink.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardBody);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardLink);

    container.appendChild(card);
}

newProduct("https://picsum.photos/320/400","Camisa", "Una cosa cool", "400");
newProduct("https://picsum.photos/320/400","Camisa", "Una cosa cool", "400");
newProduct("https://picsum.photos/320/400","Camisa", "Una cosa cool", "400");
newProduct("https://picsum.photos/320/400","Camisa", "Una cosa cool", "400");
newProduct("https://picsum.photos/320/400","Camisa", "Una cosa cool", "400");
newProduct("https://picsum.photos/320/400","Camisa", "Una cosa cool", "400");