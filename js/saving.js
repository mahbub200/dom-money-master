document.getElementById('save-button').addEventListener('click',function(){
   const savingInputField=inputFieldSetByID('saving-input');
   const balance= elementTextField('balance')
//    const saving=elementTextField('saving-amount
   const savingAmount=(balance* savingInputField)/100;
   elementSetTextById('saving-amount',savingAmount);
   const remainingBalance=balance-savingAmount;
   elementSetTextById('remaining-balance',remainingBalance)
   
})