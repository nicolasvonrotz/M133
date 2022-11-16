import EventEmitter from 'events';

const myEmitter = new EventEmitter();

function eventListener(parameter) {
    console.log(`Event uebung wurde erhört, Parameter ist ${parameter}`);
}

myEmitter.once('uebung', eventListener);

myEmitter.on('uebung', (parameter) => {
    console.log(`Event uebung wurde erneut aufgerufen (anonym), Parameter ist ${parameter}`)
});

myEmitter.emit('uebung', "M133");
myEmitter.emit('uebung', "M133");
