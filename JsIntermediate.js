
//Part I
//Create a function called starString() that takes a number and returns a string of that many *. For example:
function starString(num){
  var str = "*";
  for (var i = 0; i <num;i++){
    str += "*";
  }
  return str;
};


stars = starString(4)
console.log( stars);

//Part II
//Create a function called drawStars() that takes an array of numbers and prints out *.

function drawStars(array){
    var str = "*"
    var star;
    for(var i=0; i< array.length; i++){
        star = str.repeat(array[i]);
        console.log(star)
    }
    
};

 part2 = drawStars([4, 6, 1, 3, 5, 7, 25]);
console.log( part2);

//(OR)----------------------------
function drawStars(array){
    var str = "";

    for(var i = 0; i < array.length; i++){
        var temp = array[i];    
        for(var j = 0; j < temp; j++){
            str += "*";
            
        }
        console.log(str);
        str = "";
    }
};


 part2 = drawStars([1,3,4,5]);
    console.log(part2);

//part3---------------

function superDrawStars(array){
    var str = "*"
    for(var i=0; i<=array.length; i++){
        if(typeof(array[i]) === "number"){
         
            console.log(str.repeat(array[i]));
            if(array[i] === undefined){
                return;
            }
          
        }else if(typeof(array[i]) === "string"){
            var star = "";
            for(var j=0; j<=array[i].length; j++){
                star += array[i][0].toLowerCase();
            }if(array[i] === undefined){
                return;
            }
            console.log(star);
        }
    }
    
    // return;
};

 part3 = superDrawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);
console.log(part3);