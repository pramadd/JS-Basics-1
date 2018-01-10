//Challenge1

//Print all of the students and their cohort.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];



for (i=0;i<students.length;i++){
  console.log("Name:" + students[i].name + "," + "Cohort:" + students[i].cohort );
}

//o/p => Name: Remy, Cohort: Jan
//Name: Genevieve, Cohort: March
//Name: Chuck, Cohort: Jan
//Name: Osmund, Cohort: June
//Name: Nikki, Cohort: June
//Name: Boris, Cohort: June

// Challenge2------------------------


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(var i in users){
    for(z=0; z<users[i].length;z++){
      console.log(z+1 + "-"  +users[i][z].last_name + "-"  + users[i][z].first_name + "-" + (users[i][z].last_name.length + users[i][z].first_name.length) );
    }
}
    
     