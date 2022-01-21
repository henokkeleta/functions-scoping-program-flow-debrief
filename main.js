//JavaScript Functions, Scoping, Program Flow//


/*Exercise #6
    //  Write a function that takes an Array of strings as an argument and prints the first letter of each element out (one per line). 
    //  For example the Array ["Hello", "World", "This", "Is", "My", "String"] should get printed as follows:
    
    H
    W
    T
    I
    M
    S
    
*/ 
//  Resources: charAt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//             for...of statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//             functions: https://www.w3schools.com/js/js_functions.asp


//  Write your code below:
//  Use console.log() to check your results in the browser
const arr = ["Hello", "World", "This", "Is", "My", "String"];
let anotherArray=[];
function getFirstLetters(array){
    
    //loop through the entire array element
    for(let i=0;i<array.length;i++){
      
        //get the first char of each index
      
       //store add them in a new array
       anotherArray.push(getChar(array[i]));
        
    }

    console.log(anotherArray)
}
getFirstLetters(arr);
//write a function return the first char of the string
function getChar(str){
    let char=str.charAt(0);
    return char;
}







