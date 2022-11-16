function Addition(wert1, wert2, callbackFunktion){
    const ergebnis = wert1 + wert2;
    callbackFunktion(ergebnis);
    callbackFunktion(wert1);
    callbackFunktion(wert2);
  }

  Addition(10, 5,   function (ergebnis) {console.log(ergebnis);});
  