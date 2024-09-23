function createCounter() {
    let counters = [];

    return {
        increment: function(number) {
           counters.push(number);
           return `${number}`
        },
        decrement: function(number) {
            //counters.pop(number)
           return counters.pop(number), counters.join( ', ');
        }
    }
}
const counter = createCounter();
console.log(counter.decrement())
