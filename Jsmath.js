//math1-------------
function zero_negativity(myArray){
    for(var i = 0; i < myArray.length; i++)
    {
        if(myArray[i] > 0){
            return true;
        }
    
    return false;
    }
};
math1 = zero_negativity([-1,2,3])
console.log(math1)

// o/p=> false
//math2---------------
function is_even(x){
    if(x%2 === 0)
      {
        return true;
      }
    return false;
  };
  math2 = is_even(5)
  console.log(test1)

  //o/p => false
//math3=-----------------
function how_many_even(array){
  var count = 0;
  for(var i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
          count++;
      }
  }
  return count;
  }
  math3 = how_many_even([1,2,3,4,8,8,8,18,6])
  console.log(test3);
  //0/p=>7

  //math4-------------------

  function create_dummy_array(n){
    var array =[]
    for(var i=0;i<n ;i++)
      {
        array.push(Math.floor(10*Math.random()))
      }
  return array;
}
math4 = create_dummy_array(3)
console.log(math4);

//0/p =>[9, 2, 4]
//[8, 7, 9]
//[9, 4, 7]
//[3, 5, 7]


//math5-------------

function random_choice(array){
    var x = array.length
    var y = Math.floor(x*Math.random())
    return array[y];
}

math5 = random_choice([1,2,3,4])
console.log(math5);

//0/p => //4
//3
//2
//3
//3
//2
//4
//-------