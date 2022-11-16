function division(wert1, wert2, callbackFuktion){
  const ergebnis = wert1/ wert2;
  callbackFunktion(ergebnis);
}

function erbenisAnzeige(ergebnis){
  console.log(ergebnis);
}
division(10, 5, ergebnisAnzeige);

function download(url, erfolgsCallback, fehlerCallback){
}