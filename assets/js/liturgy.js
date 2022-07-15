fetch ('https://liturgia.cancaonova.com/pb/')
.then( response => response.json)
.then(response => {
  if(response.erro) {
    console.log("Erro ao acessar o JSON")
    return
}
return response
})