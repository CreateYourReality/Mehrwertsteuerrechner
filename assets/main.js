
const radioChoice = document.getElementById("NtoB"); //radio1 - Netto zu Brutto
const prozentChoice = document.getElementById("neunzehn"); // 19 oder 7 %
const inputField = document.getElementById("input");
const outputNetto = document.querySelector(".outputNetto");
const outputBrutto = document.querySelector(".outputBrutto");

const maxSteuer = 19;
const minSteuer = 7;


const startCalc = () =>{
    let nettoErg = 0;
    let bruttoErg = 0;
    let myInput= inputField.value;

    myInput.includes(",") ? myInput = myInput.replace(",","."): " ";
    myInput = Number(myInput);    

    if(radioChoice.checked){ //wenn Netto zu Brutto
        if(prozentChoice.checked){ //wenn 19%
            nettoErg = myInput * maxSteuer/100;
        }else{ //andernfalls 7%
            nettoErg = myInput * minSteuer/100;
        }
        outputNetto.innerHTML = nettoErg.toFixed(2) + " €";
        outputBrutto.innerHTML = (myInput + nettoErg).toFixed(2) + " €";
    } else{ //Brutto zu Netto
       if(prozentChoice.checked){ //19%
        nettoErg = myInput / (100+maxSteuer) * maxSteuer;
       }else{ //7%
        nettoErg = myInput / (100+minSteuer) * minSteuer;
       }
       outputNetto.innerHTML = nettoErg.toFixed(2) + " €";
       outputBrutto.innerHTML = (myInput - nettoErg).toFixed(2) + " €";
    }
}