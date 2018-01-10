console.log(hello);
var hello = 'world';

// 1 - var hello = undefined;
// 2 - console.log(hello);
// 3 - var hello = 'world';
// O/p = > undefined



//test2-----------------

var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}

//o/p=> magnet
// 1 - var needle = undefined; 
// 2 - function test(){ -- function declaration
//      var needle = undefined;
//   	var needle = 'magnet'; 
//  	console.log(needle);
//    }
// 3 - var needle = 'haystack'; 
// 4 - test();



//test3-----------------------

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//o/p => "super cool"

//test4-------------

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//o/p=> "chicken"
//"half-chicken"

//test5-----------------

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//o/p= > "TypeError: mean is not a function"



//test6-----------


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

//o/p=> undefined
//"rock"
//"r&b"
//"disco"



//test7---------


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);


//0/p=>

//"san jose"
//"seattle"
//"burbank"
//"san jose"