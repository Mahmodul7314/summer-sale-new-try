

let total = 0; 
function divClicked(data){
    const itemName = data.childNodes[3].childNodes[3].innerText;
    const selectBox = document.getElementById("calculation-entry");
    const creatli = document.createElement ('li');
    const count = selectBox.childElementCount;
    creatli.innerText = `${count+1}.${itemName} `
  
    selectBox.appendChild(creatli);
  
    selectBox.classList.add("list-none","text-2xl")

    const price =data.childNodes[3].childNodes[5].childNodes[0].innerText;
   total = parseFloat (total)+ parseFloat(price);

   const totalPrice = document.getElementById("total-price");
   totalPrice.innerText =total;





//apply button check
    const applyBtnSpan =document.getElementById("apply-btn-span");
    
   const applyBtn = document.getElementById("applycoupon");
 
    if (total >= 200  ) {
     applyBtn.removeAttribute('disabled'); 
     applyBtnSpan.classList.add("bg-pink-500");
     
    } else {
     applyBtn.setAttribute('disabled', true);
   
    }

}
// make purchase

 









function applyCoupon() {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "SELL200") {
      const discountedAmount = total * 0.2.toFixed(2);
      const grandTotal = total.toFixed(2) - discountedAmount.toFixed(2);

      const discountElement = document.getElementById('discount');
      const grandTotalElement = document.getElementById('grand-total');

      discountElement.innerText = discountedAmount.toFixed(2);
      grandTotalElement.innerText = grandTotal.toFixed(2);
     
    } else {
      alert("Invalid coupon try again");
    }


  }










// const purchaseBtn = document.getElementById("make-purchase");

// function btnClick(){
//   if (total > 0) {
//     purchaseBtn.removeAttribute ("disabled");      //button remains disabled
//   } else {
//      purchaseBtn.setAttribute ("disabled", true) ;       //button is enabled
//   }

// }



















//redirect home page
document.getElementById("go-home").addEventListener('click',function(){

  window.location.href ='home.html';

})