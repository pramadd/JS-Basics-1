//Basic 1


let x =[];
x.push('coding','dojo','rocks');
console.log(x);

x.pop('rocks');
console.log(x);


//BAsic2

const y =[];
console.log(y);

y.push(88);
console.log(y);



//Basic3
let z =[9, 10, 6, 5, -1, 20, 13, 2];

console.log(z);

for(let i=0;i < z.length-1; i++){
  console.log(z[i]);
}




//Basic4

let names= ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

for(let i = 0; i < names.length; i++){
    console.log(names[i].length);   
};
// o/p ->5 3 5 6 8


for(let i = 0; i < names.length; i++){
    if(names[i].length == 5){
        console.log(names[i]);
        
    }
}

// o/p => "Kadie" "Fritz"




//Basic5

function yell(name){
    console.log(name.toUpperCase());
   
 };
 yell('neethu');

 //o/p => "NEETHU"

https://www.w3schools.com/jsref/jsref_touppercase.asp
