
// Write js code to take name of user,his/her faculty name, his/her gpa of 8 semesters(each using prompt) and his/her exam roll number as inputs and then calculate the cgpa of the 8 semesters and display the output as:
//  I am "Name" and I am enrolled in "Faculty name". My exam roll number is "Roll number" and I scored "Cgpa" CGPA in my Bachelor's.

let name = prompt ("Enter you name:");
let faculty = prompt ("Enter your faculty name:");
let firstsem = parseInt(prompt ("Enter gpa of your first semester"));
let secondsem = parseInt(prompt ("Enter gpa of your second semester"));
let thirdsem = parseInt(prompt ("Enter gpa of your third semester"));
let fourthsem = parseInt(prompt ("Enter gpa of your fourth semester"));
let fifthsem = parseInt(prompt ("Enter gpa of your fifth semester"));
let sixthsem = parseInt(prompt ("Enter gpa of your sixth semester"));
let seventhsem = parseInt(prompt ("Enter gpa of your seventh semester"));
let eigthsem = parseInt(prompt ("Enter gpa of your eigth semester"));
let roll = prompt ("Enter you roll number:");

let Cgpa = (firstsem + secondsem + thirdsem + fourthsem + fifthsem + sixthsem + seventhsem + eigthsem) / 8;

alert (`I am ${name} and I am enrolled in ${faculty}. My exam roll number is ${roll} and I scored  ${Cgpa} CGPA in my Bachelor's.`);