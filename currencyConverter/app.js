const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".finalMsg");

for(let select of dropdowns){
    for(currCode in countryList){
        const newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected = "USD";
        }
        if(select.name==="to" && currCode==="INR"){
            newOption.selected = "INR";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target) //to specify where the change has occured
    })
}

const updateFlag = (event) => {
    let currCode = event.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    const img = event.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal<1){
        amtVal = 1;
        amount.value = "1";
    }
    let fromCurr = from.value.toLowerCase();
    let toCurr = to.value.toLowerCase();

    const url = `${BASE_URL}/${fromCurr}.json`
    let response = await fetch(url);
    let data = await response.json();
    let rateArray = data[fromCurr];
    let rate = rateArray[toCurr];
    
    let finalAmount = amtVal * rate;
    
    msg.innerText = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
})