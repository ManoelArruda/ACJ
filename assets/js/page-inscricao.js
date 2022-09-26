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

/* ======================================================================================== */

/* outras doenças */

function testeDoencas(){
  const outrasDoencas = document.getElementById("outros")
  const inputOutrasDoencas = document.getElementById("outrasDoencas")
  const perguntaOutrasDoencas = document.getElementById("perguntaOutrasDoencas")

  if(outrasDoencas.checked){
    perguntaOutrasDoencas.style.display = 'block'
    inputOutrasDoencas.style.display = 'inline'
  }else{
    inputOutrasDoencas.style.display = 'none'
    perguntaOutrasDoencas.style.display = 'none'
  }
}

/* fim outras doenças */

/* ======================================================================================== */

/* vacina covid */

function testeCovid(){
  
  const covidSim = document.getElementById("covidSim")
  const covidNao = document.getElementById("covidNao")
  const inputQtdDoses = document.getElementById("qtdDoses")
  const dosesCovid = document.getElementById("dosesCovid")

  if(covidSim.checked){
    dosesCovid.style.display = 'block'
    inputQtdDoses.style.display = 'inline'
  }else if(covidNao.checked){
    inputQtdDoses.style.display = 'none'
    dosesCovid.style.display = 'none'
  }
}

/* fim vacina covid */

/* ======================================================================================== */

/* medicacoes continuas */

function medCont(){
  
  const medContSim = document.getElementById("medContSim")
  const medContNao = document.getElementById("medContNao")
  const inputMedCont = document.getElementById("inputMedCont")
  const medContDoses = document.getElementById("medContDoses")

  if(medContSim.checked){
    medContDoses.style.display = 'block'
    inputMedCont.style.display = 'inline'
  }else if(medContNao.checked){
    inputMedCont.style.display = 'none'
    medContDoses.style.display = 'none'
  }
}

/* fim medicacoes continuas */

/* ======================================================================================== */

/* medicacoes continuas */

function tipoAlergia(){
  
  const alergiaSim = document.getElementById("alergiaSim")
  const alergiaNao = document.getElementById("alergiaNao")
  const inputAlergia = document.getElementById("inputAlergia")
  const alergiaAQue = document.getElementById("alergiaAQue")

  if(alergiaSim.checked){
    alergiaAQue.style.display = 'block'
    inputAlergia.style.display = 'inline'
  }else if(alergiaNao.checked){
    alergiaAQue.style.display = 'none'
    inputAlergia.style.display = 'none'
  }
}

/* fim medicacoes continuas */

/* ======================================================================================== */

/* problemas cardiacos */

function problemaCardiaco(){
  
  const cardiacoSim = document.getElementById("cardiacoSim")
  const cardiacoNao = document.getElementById("cardiacoNao")
  const inputCardiaco = document.getElementById("inputCardiaco")
  const perguntaCardiaco = document.getElementById("perguntaCardiaco")

  if(cardiacoSim.checked){
    perguntaCardiaco.style.display = 'block'
    inputCardiaco.style.display = 'inline'
  }else if(cardiacoNao.checked){
    perguntaCardiaco.style.display = 'none'
    inputCardiaco.style.display = 'none'
  }
}

/* fim problemas cardiacos */

/* ======================================================================================== */

/* calendario vacinal */

function calendarioVacinal(){
  
  const calendarioSim = document.getElementById("calendarioSim")
  const calendarioNao = document.getElementById("calendarioNao")
  const inputCalendario = document.getElementById("inputCalendario")
  const perguntaCalendario = document.getElementById("perguntaCalendario")

  if(calendarioNao.checked){
    perguntaCalendario.style.display = 'block'
    inputCalendario.style.display = 'inline'
  }else if(calendarioSim.checked){
    perguntaCalendario.style.display = 'none'
    inputCalendario.style.display = 'none'
  }
}

/* fim calendario vacinal */

/* ======================================================================================== */

/* deficiencia fisica */

function deficienciaFisica(){
  
  const defFisicaSim = document.getElementById("defFisicaSim")
  const defFisicaNao = document.getElementById("defFisicaNao")
  const inputDefFisica = document.getElementById("inputDefFisica")
  const perguntaDefFisica = document.getElementById("perguntaDefFisica")

  if(defFisicaSim.checked){
    perguntaDefFisica.style.display = 'block'
    inputDefFisica.style.display = 'inline'
  }else if(defFisicaNao.checked){
    perguntaDefFisica.style.display = 'none'
    inputDefFisica.style.display = 'none'
  }
}

/* fim deficiencia fisica */

/* ======================================================================================== */

/* recursos */

function recursos(){
  const checkboxOutrosRecursos = document.getElementById("outrosRecursos")
  const inputOutrosRecursos = document.getElementById("inputOutrosRecursos")
  const perguntaOutrosRecursos = document.getElementById("perguntaOutrosRecursos")

  if(checkboxOutrosRecursos.checked){
    perguntaOutrosRecursos.style.display = 'block'
    inputOutrosRecursos.style.display = 'inline'
  }else{
    perguntaOutrosRecursos.style.display = 'none'
    inputOutrosRecursos.style.display = 'none'
  }
}

/* fim recursos */

/* ======================================================================================== */

/* fumante */

function fumantes(){
  
  const fumanteSim = document.getElementById("fumanteSim")
  const fumanteNao = document.getElementById("fumanteNao")
  const inputFumante = document.getElementById("inputFumante")
  const perguntaFumante = document.getElementById("perguntaFumante")

  if(fumanteSim.checked){
    perguntaFumante.style.display = 'block'
    inputFumante.style.display = 'inline'
  }else if(fumanteNao.checked){
    perguntaFumante.style.display = 'none'
    inputFumante.style.display = 'none'
  }
}

/* fim fumante */

/* ======================================================================================== */

/* cirugia */

function tipoCirugias(){
  
  const cirugiaSim = document.getElementById("cirurgiaSim")
  const cirugiaNao = document.getElementById("cirurgiaNao")
  const inputCirugia = document.getElementById("inputCirurgia")
  const perguntaCirugia = document.getElementById("perguntaCirurgia")

  if(cirugiaSim.checked){
    perguntaCirugia.style.display = 'block'
    inputCirugia.style.display = 'inline'
  }else if(cirugiaNao.checked){
    perguntaCirugia.style.display = 'none'
    inputCirugia.style.display = 'none'
  }
}

/* fim cirugia */

/* ======================================================================================== */
