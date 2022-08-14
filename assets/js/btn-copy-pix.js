function copyPix() {
  /* Get the text field */
  const copyPix = document.getElementById("copyPix");

  /* Select the text field */
  copyPix.select();
  copyPix.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyPix.value);
  
  /* Alert the copied text */
  alert("Chave PIX copiada");
}