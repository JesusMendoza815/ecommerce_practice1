import { saveValues, onGetValues, deleteCard, getCardValues, updateCardValues} from "./firebase.js";

const formUp = document.getElementById("formUp");//change formUp to $formUp
/*for cards*/
const $cards = document.querySelector("#collection"),
      $template = document.getElementById("template-card").content,
      $fragment = document.createDocumentFragment();
let editStatus = false;
let id = "";

window.addEventListener(`DOMContentLoaded`,async () => {

    //onSnapshot(collection(db, `products`), querySnapshot => {
    onGetValues((querySnapshot) => {
        $cards.innerHTML = ""; //only get the existent cards
        querySnapshot.forEach((doc) => {
            const values = doc.data();
            $template.querySelector("img").setAttribute("src", values.urlImg);
            $template.querySelector("img").setAttribute("alt", values.title);
            $template.querySelector(".card-title").textContent= values.title;
            $template.querySelector(".card-description").textContent= values.description;
            $template.querySelector(".card-price").textContent= values.price;
            $template.querySelector(".btn-delete").setAttribute("id", doc.id);
            $template.querySelector(".btn-update").setAttribute("id", doc.id);
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
        /**crUd update*/
        const btnUpdate = $cards.querySelectorAll(".btn-update");
        btnUpdate.forEach(btn => {
            btn.addEventListener("click", async () => {
                const doc = await getCardValues(btn.id)
                const cardValues = doc.data();
                formUp[`formUrlImage`].value = cardValues.urlImg;
                formUp[`formTitle`].value = cardValues.title;
                formUp[`formDescription`].value = cardValues.description;
                formUp[`formPrice`].value = cardValues.price;
                // console.log(doc.data())
                editStatus = true;
                id = doc.id;
                formUp[`btn-save-card`].textContent = "Update";
                // console.log(cardValues)
                // console.log("Editing")
            });
            
        });
    });
});

/**Values are saved on database*/
const body = document.getElementById("add-product");
body.addEventListener("click", () => {
    formUp.addEventListener("submit", (e) => {
        e.preventDefault(); //page don´t refresh
    
        const urlImg = formUp[`formUrlImage`];
        const title = formUp[`formTitle`];
        const description = formUp[`formDescription`];
        const price = formUp[`formPrice`];
    
        if (!editStatus) {
            console.log("editingNO")
            saveValues(urlImg.value, title.value, description.value, price.value);
        } else {
            console.log("editing")
            updateCardValues(id ,{urlImg: urlImg.value, title: title.value, description: description.value, price: price.value});
            editStatus = false;
        }
        
        
    })
    formUp[`btn-save-card`].textContent = "Save Card";
    formUp.reset();
})