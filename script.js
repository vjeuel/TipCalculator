// Variables
var totalBillId = document.querySelector("#total-bill");
var tipPercId = document.querySelector("#tip-perc");
var submitId = document.querySelector("#submit");
var splitId = document.querySelector("#split")

// Tip calculation
function tipCalc(totalBill, tipPerc) {
   var totalTip = (totalBill * tipPerc).toFixed(2);
   return totalTip;  
};

function totalCalc(totalBill, tipAmount) {
   return parseFloat(totalBill) + parseFloat(tipAmount);
};

function addTip() {
   event.preventDefault();
   var tipPerc = tipPercId.value * 0.01;
   var total = totalBillId.value; 
   var tipAmount = tipCalc(total, tipPerc);
   var newTotal = totalCalc(tipAmount, total);
   document.querySelector("#tip-amount").textContent = tipAmount;
   document.querySelector("#new-total").textContent = newTotal.toFixed(2);
};

function splitTotal() {
   event.preventDefault(); 

  var total = document.querySelector("#new-total").textContent;
  var numPeople = document.querySelector("#num-people").value;
  
  var newTotal = (total / numPeople).toFixed(2);
  document.querySelector("#split-total").textContent = newTotal;
}

submitId.addEventListener("click", addTip);
splitId.addEventListener("click", splitTotal);