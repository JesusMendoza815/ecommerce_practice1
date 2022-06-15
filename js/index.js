import { saveValues, onGetValues, deleteCard} from "./firebase.js";

const formUp = document.getElementById("formUp");
/*for cards*/
const $cards = document.querySelector("#collection"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment();

window.addEventListener(`DOMContentLoaded`,async () => {

    //onSnapshot(collection(db, `products`), querySnapshot => {
    onGetValues((querySnapshot) => {
        $cards.innerHTML = ""; //take just the cards that exist
        querySnapshot.forEach((doc) => {
            const values = doc.data();
            $template.querySelector("img").setAttribute("src", values.urlImg);
            $template.querySelector("img").setAttribute("alt", values.title);
            $template.querySelector(".card-title").textContent= values.title;
            $template.querySelector(".card-description").textContent= values.description;
            $template.querySelector(".card-price").textContent= values.price;
            $template.querySelector(".btn-delete").setAttribute("id", doc.id);
            /*node need to be cloned to appandChild*/
            let $clone = document.importNode($template,true);
            /*fragment must be appended to clone*/
            $fragment.appendChild($clone);
        })
        /**Card with values must be appended to fragment*/
        $cards.appendChild($fragment);

        /**cruD */
        const btnDelete = $cards.querySelectorAll(".btn-delete");
        btnDelete.forEach(btn => {
            btn.addEventListener("click", () => {
                deleteCard(btn.id);
            })
        })
        
    });
    
});


/**Values are saved on database*/
formUp.addEventListener("submit", (e) => {
    e.preventDefault(); //page don´t refresh

    const urlImg = formUp[`formUrlImage`];
    const title = formUp[`formTitle`];
    const description = formUp[`formDescription`];
    const price = formUp[`formPrice`];

    saveValues(urlImg.value, title.value, description.value, price.value);

    formUp.reset();
})