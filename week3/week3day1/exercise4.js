function twice(action, times) { 
    for (let i = 0; i < times; i++) 
    {
    action(); }
}
    twice(() => console.log("Amala is so so overrated!!!"), 2); 