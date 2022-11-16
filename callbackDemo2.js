function division(wert1, wert2, callbackFuktion){

  const ergebnis = wert1/wert2;
  
  callbackFuktion(ergebnis);
}

division(10, 2, (ergebnis) =>{
  console.log(ergebnis)
})