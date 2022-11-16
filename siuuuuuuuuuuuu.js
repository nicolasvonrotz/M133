async function summeGeradeZahlen(resolve, reject) {
    let summe = 0;

    for (let i = 0; i < 900000000; i++) {
        if (i % 2 != 0){
            summe += i;
        }
    }

    resolve(summe);
}

async function summeUngeradeZahlen(resolve, reject) {
    let summe = 0;

    for (let i = 0; i < 900000000; i++) {
        if (i % 2 == 0){
            summe += i;
        }
    }

    resolve(summe);
}

async function longRunningTask() {
    const promiseGeradeZahlen = new Promise(summeGeradeZahlen);
    const promiseUngeradeZahlen = new Promise(summeUngeradeZahlen);

    const ergebnisGeradeZahlen = await promiseGeradeZahlen;
    const ergebnisUngeradeZahlen = await promiseUngeradeZahlen;

    console.log(`Summe Gerade Zahlen: ${ergebnisGeradeZahlen}`)
    console.log(`Summe Ungerade Zahlen: ${ergebnisUngeradeZahlen}`)
}

longRunningTask();