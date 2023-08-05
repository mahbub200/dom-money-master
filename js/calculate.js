function inputFieldSetByID(id) {
  let fieldInput = document.getElementById(id);
  let fieldString = fieldInput.value;
  let fieldValue = Number(fieldString);
  fieldInput.value=''
  return fieldValue;
}
function elementSetTextById(id,value){
    const totalExpenses=document.getElementById(id);
    totalExpenses.innerText=value;

}
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const incomeInputField = inputFieldSetByID("income-input");
    const foodInputField = inputFieldSetByID("food-input");
    const rentInputField = inputFieldSetByID("rent-input");
    const clothesInputField = inputFieldSetByID("clothes-input");

    const expense=foodInputField+rentInputField+clothesInputField;
    elementSetTextById('total-expenses',expense);
    let balance=incomeInputField-expense;
    elementSetTextById('balance',balance)
  

    
  });
