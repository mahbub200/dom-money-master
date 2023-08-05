let income='income';
let food='food';
let rent='rent'
let clothes='clothes'
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    // taking input values from funxtion 
    const incomeInputField = inputFieldSetByID("income-input");
    const foodInputField = inputFieldSetByID("food-input");
    const rentInputField = inputFieldSetByID("rent-input");
    const clothesInputField = inputFieldSetByID("clothes-input");
// total expense 
    const expense=foodInputField+rentInputField+clothesInputField;
    elementSetTextById('total-expenses',expense);
    // balance 
    let balance=incomeInputField-expense;
    elementSetTextById('balance',balance);

    if(incomeInputField!=NaN ||foodInputField!=NaN|| rentInputField!=NaN||clothesInputField!=NaN){
      errorHandlng()
    }
    if(incomeInputField<0||foodInputField<0||rentInputField<0||clothesInputField<0){
errorHandlng
    }
  

    
  });
