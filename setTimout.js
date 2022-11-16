// function dowload(url, erfolgsCallback, fehlerCallback){}

// setTimeout(callback, delay);

function Timeout(){
  console.log('Timeout!');
}
setTimeout(timeout,3000);

// Beispiel: statisch definiert timeout Funktion 

setTimeout(()=>{
  console.log('Timeout!');
}, 3000);