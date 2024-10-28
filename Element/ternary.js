let input = true;

let option = undefined

if(input){
    option = "yes";
}else{
    option = "no";
}

console.log("OPTION:", option);


function grow(c){
    return grow(c + 1);
}
console.log(grow(1));

fruit = ["apple", "banana", "cherry"]
