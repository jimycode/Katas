/* In this exercise, we will be given a list of 
instructors and have to determine which instructor 
has the longest name.
 */


const instructorWithLongestName = function(instructors) {
  let longest = instructors[0].name.length; 
  let name = '';
  let course='';
  for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > longest) {
      longest = instructors[i].name.length; 
      name = instructors[i].name; 
      course = instructors[i].course;
    }
    
  }
  return { 'name': name, 'course': course};

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));