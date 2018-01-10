// test1

function magic_multiply(x, y){
    return x*y; 
};
test1 = magic_multiply(5, 2);
console.log(test1);//  o/p => 10
test2 = magic_multiply(0, 0);
console.log(test2); // o/p => 0

function magic_multiply(x, y){
    //      return x*y;
    var z=[]
      for (var i = 0; i <x.length; i++) {
            z.push( x[i] * y);
        }
        return z;
        
    };
    
    test3 = magic_multiply([1, 2, 3], 2);
    console.log(test3); //o/p => [2,4,6]

    //--------------

    //test5
    function magic_multiply(x, y){
        
      for (var i =0 ; i<y;i++){
        console.log(x)
      }
    };
    
    test4 = magic_multiply("brendo",4);
    console.log(test4);

    //o/p=> "brendo" "brendo" "brendo" "brendo" "brendo" 
