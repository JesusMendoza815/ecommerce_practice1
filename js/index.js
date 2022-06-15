import { saveValues, getValues, onGetValues, collection, db, onSnapshot} from "./firebase.js";

const formUp = document.getElementById("formUp");
// const cardsContainer = document.getElementById("cards-container");

/*for cards*/
const $cards = document.querySelector("#collection"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment();

window.addEventListener(`DOMContentLoaded`,async () => {
    //querySnapshot = los documentos que exisen en el momento
    // const querySnapshot = await getValues()
    // querySnapshot.array.forEach(doc => {
    //     console.log(doc);
    // });
    onSnapshot(collection(db, `products`), querySnapshot => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            const values = doc.data();
            $template.querySelector("img").setAttribute("src", values.urlImg);
            $template.querySelector("img").setAttribute("alt", values.title);
            $template.querySelector(".card-title").textContent= values.title;
            $template.querySelector(".card-description").textContent= values.description;
            $template.querySelector(".card-price").textContent= values.price;

            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
        })
        $cards.appendChild($fragment);
    })
    
});



formUp.addEventListener("submit", (e) => {
    e.preventDefault(); //page don´t refresh

    const urlImg = formUp[`formUrlImage`];
    const title = formUp[`formTitle`];
    const description = formUp[`formDescription`];
    const price = formUp[`formPrice`];

    saveValues(urlImg.value, title.value, description.value, price.value);

    formUp.reset();
})