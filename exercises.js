//3-1

let arrays = [[1, 2, 3], [4, 5], [6]];

let flat = arrays.reduce((value, currentValue) => 
{
    return value.concat(currentValue)
}, []);

console.log(flat);

//3-2

function loop()
{
    for(let i = 3; i > 0; i--)
    {
        if (i > 0)
        {
            console.log(i)
        }
        else
            loop();
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

//3-3
//3-4

function everyLoop(array, test)
{
    for (let i = 0; i < array.length; i++)
    {
        if (!test(array[i])) 
        {
            return false;
        }
    }
      return true;
}

function everySome(array, test)
{
    return !array.some(function(element) 
    {
        return !test(element);
    });
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));
