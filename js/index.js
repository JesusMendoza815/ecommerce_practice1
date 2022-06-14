import { saveValues, getValues } from "./firebase.js";


window.addEventListener(`DOMContentLoaded`, async () => {
    //querySnapshot = los documentos que exisen en el momento
    const querySnapshot = await getValues()
    console.log(querySnapshot)
});

const formUp = document.getElementById("formUp");

formUp.addEventListener("submit", (e) => {
    e.preventDefault(); //page don´t refresh

    const urlImg = formUp[`formUrlImage`];
    const title = formUp[`formTitle`];
    const description = formUp[`formDescription`];
    const price = formUp[`formPrice`];

    saveValues(urlImg.value, title.value, description.value, price.value);

    formUp.reset();
})