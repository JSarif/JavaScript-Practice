/* Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

let input = "Holla with the rinsin sound";

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    //console.log('i is ' + i);
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    };
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    };
    for (let j = 0; j < vowels.length; j++) {
        //console.log('j is ' + j);
        if (input[i] === vowels[j]) {
            //console.log(input[i]);
            resultArray.push(input[i]);
        };
    };
};

//console.log(resultArray);

let resultString = resultArray.join(' ').toUpperCase();

console.log(`${input} translated to whale talk is ... ${resultString}`);