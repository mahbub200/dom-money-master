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
  function errorHandlng(){
    let inputContainer =document.getElementById('input-container');
    let p=document.createElement('p');
    p.innerText=`field input cannot be a string or a negative number`
    inputContainer.appendChild(p);
    p.style.color='red'
  }