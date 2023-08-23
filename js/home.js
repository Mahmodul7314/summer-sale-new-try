1//
function divClicked(){
    addToCalculationEntry("K. Accessories");
    const firstItem = textToPerseFloat("item-price1");
    const totalPrevious = textToPerseFloat("total-price");

    // calculate 
    const totalNow = firstItem + totalPrevious;
   /*totalprev*/const totalPreviouss= document.getElementById("total-price");

   totalPreviouss.innerText = totalNow;

  
}
//2
function itemTwoClick(){
    addToCalculationEntry("N. Accessories");
    const price2 = textToPerseFloat("item-price2");
    const totalPrevious = textToPerseFloat("total-price");

    const totalNow = price2 + totalPrevious;
    const totalPreviouss= document.getElementById("total-price");
    totalPreviouss.innerText = totalNow;
    
}
//3
function itemThreeCLick(){
    addToCalculationEntry("Home Cooker");
    const price3 = textToPerseFloat("item-price3");
    const totalPrevious = textToPerseFloat("total-price");

    const totalNow = price3 + totalPrevious;
    const totalPreviouss= document.getElementById("total-price");
    totalPreviouss.innerText = totalNow;
    
}
//4
function itemFourCLick(){
    addToCalculationEntry("Sports Back Cap");
    const price4 = textToPerseFloat("item-four");
    const totalPrevious = textToPerseFloat("total-price");

    const totalNow = price4 + totalPrevious;
    const totalPreviouss= document.getElementById("total-price");
    totalPreviouss.innerText = totalNow;
    
}
//5
function itemFiveCLick(){
    addToCalculationEntry("Full Jersey Set");
    const price5 = textToPerseFloat("item-five");
    const totalPrevious = textToPerseFloat("total-price");

    const totalNow = price5 + totalPrevious;
    const totalPreviouss= document.getElementById("total-price");
    totalPreviouss.innerText = totalNow;
    
}
//6
function itemSixCLick(){
    addToCalculationEntry("Sports cates");
    const price6 = textToPerseFloat("item-six");
    const totalPrevious = textToPerseFloat("total-price");

    const totalNow = price6 + totalPrevious;
    const totalPreviouss= document.getElementById("total-price");
    totalPreviouss.innerText = totalNow;
    
}
























// emtry entry text---- tota,discount, others
const entry =document.getElementById("calculation-entry");
const entryString =entry.innerText;
console.log(entryString);



//fucntion for reuse ////////////////////////////
function textToPerseFloat(itemID){
    const itemSelect = document.getElementById(itemID);
    const itemTextString = itemSelect.innerText;
    const itemNum = parseFloat(itemTextString);
   const fixTwoNum = itemNum.toFixed(2);
   const fixTwoNumWithParse =parseFloat(fixTwoNum);
return fixTwoNumWithParse;

}


function addToCalculationEntry(areaType){
   
    const calculationEntry =document.getElementById("calculation-entry");
   
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2','text-3xl');
    p.innerHTML = `${count + 1}. ${areaType} 
    `
   
    calculationEntry.appendChild(p);
   console.log(calculationEntry);
    
   }
   


//--------------------------------------------------------------------------------------------//


   

