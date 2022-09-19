/* Select selecionar paroquia e mostrar campo para digitar paroquia */
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
/* fim select outra paroquia */

/* ======================================================================================== */

/* check para qual contraindicacao de atividade fisica */

const pergunta = document.querySelector('.contraindicacao');
const inputContraindicacao = document.getElementById("contraindicacao")
const radioSim = document.getElementById("radioSim")
const radioNao = document.getElementById("radioNao")

radioSim.addEventListener('change', function(event) {
  event.preventDefault()
  const id = event.target.id

  if(id === 'radioSim'){
    console.log(id)
    pergunta.style.display = 'block'
    inputContraindicacao.style.display = 'inline'
  }
});

radioNao.addEventListener('change', function(event) {
  event.preventDefault()
  const id = event.target.id

  if(id === 'radioNao'){
    console.log(id)
    pergunta.style.display = 'none'
    inputContraindicacao.style.display = 'none'
  }
});

/* fim contraindicacao atividade fisica */

/* ======================================================================================== */

/* check frequenta igreja */
const perguntaAQtdTemp = document.querySelector('.tempoFrequentaIgreja');
const inputAQtdTemp = document.getElementById("tempoFrequentaIgreja")
const radioSimIgreja = document.getElementById("simIgreja")
const radioNaoIgreja = document.getElementById("naoIgreja")

radioSimIgreja.addEventListener('change', function(event) {
  event.preventDefault()
  const id = event.target.id

  if(id === 'simIgreja'){
    console.log(id)
    perguntaAQtdTemp.style.display = 'block'
    inputAQtdTemp.style.display = 'inline'
  }
});

radioNaoIgreja.addEventListener('change', function(event) {
  event.preventDefault()
  const id = event.target.id

  if(id === 'naoIgreja'){
    console.log(id)
    perguntaAQtdTemp.style.display = 'none'
    inputAQtdTemp.style.display = 'none'
  }
});

/* fim frequenta igreja */

/* ======================================================================================== */

/* presta serviço na paroquia */

const perguntaQualServico = document.querySelector('.servicoParoquia');
const inputServicoParoquia = document.getElementById("inputServicoParoquia")
const radioSimServico = document.getElementById("simServico")
const radioNaoServico = document.getElementById("naoServico")

radioSimServico.addEventListener('change', function(event) {
  event.preventDefault()
  const id = event.target.id

  if(id === 'simServico'){
    console.log(id)
    perguntaQualServico.style.display = 'block'
    inputServicoParoquia.style.display = 'inline'
  }
});

radioNaoServico.addEventListener('change', function(event) {
  event.preventDefault()
  const id = event.target.id

  if(id === 'naoServico'){
    console.log(id)
    perguntaQualServico.style.display = 'none'
    inputServicoParoquia.style.display = 'none'
  }
});

/* fim presta serviço na paroquia */