"use strict"; 

class Einkauf {    
    /*Mit ES2022 führt JavaScript echte private (#) Eigenschaften*/ 
    #SCREW_FACTOR = 0.2  ;    
    #SCREW_NUT_FACTOR = 0.1  ;    
    #GROMMET_FACTOR = 0.05   ;    
    #screws = 0;    
    #screw_nuts = 0;    
    #grommets = 0;    
    constructor(screws,screw_nuts,grommets) {          
        /*Über den ternären Operator wird sichergestellt, dass die jeweilige Eigenschaft nur überschrieben wird, wenn der jeweilige Parameter einen Wert hat.*/
        this.#screws = screws ? screws : this.#screws; 
        this.#screw_nuts = screw_nuts ? screw_nuts : this.#screw_nuts;        
        this.#grommets = grommets ? grommets : this.#grommets;   
    }    
    
    /*Eigenschaften können seit ES2022 so definiert werden.*/   
    get   screws() {       
        return this.#screws;
    } 
    set   screws(screws) {       
        this.#screws = screws;   
    }    
    
    get   screw_nuts() {
        return this.#screw_nuts; 
    }
    set   screw_nuts(screw_nuts) {       
        this.#screw_nuts = screw_nuts;   
    }    
    
    get   grommets() {           
        return this.#grommets;
    }     
    set   grommets(grommets) {   
        this.#grommets = grommets;   
    }    
    
    berechnen() {       
        const result = this.#screws * this.#SCREW_FACTOR + this.#screw_nuts * this.#SCREW_NUT_FACTOR + this.#grommets * this.#GROMMET_FACTOR;        
        return result.toLocaleString(undefined, { minimumFractionDigits: 2 } );
    } 
} 

class Program {    
    static start() {
        const einkauf = new Einkauf( document.getElementById("screws").value,
        document.getElementById("screw_nuts").value,
        document.getElementById("grommets").value    );        
        
        /*Alternativ ohne Konstruktor:*/       
        /* const einkauf = new Einkauf();       
        einkauf.screws = document.getElementById("screws").value;      
        einkauf.screw_nuts = document.getElementById("screw_nuts").value;      
        einkauf.grommets = document.getElementById("grommets").value; */       
        
        document.getElementById("result").textContent = einkauf.berechnen();   
    } 
} 
