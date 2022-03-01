//get data



function Month(id, nth, name, days){
    this.id = id;
    this.nth = nth;
    this.name = name;
    this.days = days;
}

let months = [
    new Month("jan", 1, "january", 31),
    new Month("febr", 2, "february", 28),
    new Month("march", 3, "march", 31),
    new Month("apr", 4, "april", 30),
    new Month("may", 5, "may", 31),
    new Month("jun", 6, "june", 30),
    new Month("jul", 7, "july", 31),
    new Month("aug", 8, "august", 31),
    new Month("sept", 9, "september", 30),
    new Month("oct", 10, "october", 31),
    new Month("nov", 11, "november", 30),
    new Month("dec", 12, "december", 31)
]



//prepair data - codewars


//components = html elements we would like to add the document later

const monthSection = (id, h1, days) => {
    return `
    <section id=${id}>
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}
const dayCard = (year, months, day) => {
    return`
    <div class="card">
        <time datetime="YYYY">${year}</time>
        <time datetime="MM">${months}</time>
        <time datetime="DD">${day}</time>
        <button class="card-btm">Get day main</button>
    </div>
    `;
}

const dayCards = (months, callDayCard) =>{
    let toReturn = "";

    for (let i = 1; i <= months.days; i++) {
        toReturn += callDayCard(2022, months.nth, i)
    }

    return toReturn;
}




//render = add the components to the document

const loadEvent = _ => {

    let content="";

    for (const month  of months) {
        content += monthSection(month.id, month.name, dayCards(month, dayCard ))
    }

    document.getElementById("root").insertAdjacentHTML("beforeend", content)

    /* -----------CLick Event------------- */

    /* function cardEventClickEvent(event) {
        console.log(event.target.parentElement)
        event.target.parentElement.classList.toggle("clicked")
    }

    const cardList = document.querySelectorAll(".card");
    for (const card of cardList) {
        card.querySelector("button").addEventListener("click", cardEventClickEvent)
    } */
    function clickEvent(event){
        console.log(event.target)
        if(event.target.classList.contains("card-btm")) {
            console.log("Hello Click")
            event.target.innerHTML = "This button was click."
        }
    }

    document.addEventListener("click", clickEvent)

}
 



window.addEventListener("load", loadEvent)