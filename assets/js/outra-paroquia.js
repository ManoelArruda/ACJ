const select = document.querySelector('select');
const inputOutraParoquia = document.getElementById("outraParoquia")

select.addEventListener('change', function() {
  const option = this.selectedOptions[0];
  const texto = option.textContent;

  if(texto === 'Outra Paróquia'){
    inputOutraParoquia.style.display = 'inline'
  }else{
    inputOutraParoquia.style.display = 'none'

  }
});