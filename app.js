
//#####ARRAY#####

// const fruits = [ 'apples', 'oranges', 'grapes'];
// fruits.push('banana'); //add to array to the end
// fruits.unshift('mango'); // add to front of array
// fruits.shift(); //removes first element from array
// fruits.pop(); //removes last element in array



// // document.write(fruits);

// const person = {
//     firstName: 'Eric',
//     lastName: 'Capiz',
//     age: 34,
//     address: {
//         city: 'palatine',
//         state: 'IL',
//         zip: 60074
//     }
// }

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Check email',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Make appt',
//         isCompleted: false
//     }
// ];

//#####LOOPS#####

//FOR LOOP

// for (let i = 0; i < 10; i++){
// document.write(i);
// }

//#####while Loop

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

//########For of Loop

// for(let todo of todos){
//     console.log(todo.text);
// }

//#####for each loop

// todos.forEach(function(todo){
// console.log(todo.text);
// });


//##map loop
// const todoText = todos.map(function(todo){
//     return todo.text;
// });

// document.write(todoText);

//##filter loop

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);



//#####Conditional Statements

//if else statement


// const x = 0;
// if(x == 10){
//     console.log('x is 10');
// } else {
//     console.log('x is not 10');
// }

// || is OR statement/  && is AND statement

// const z = 10 ;
// const color = z > 10 ? 'red' : 'blue' //turnary oporater\\

// switch(color){
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

//####FUNCTIONS

// function addNums( num1 = 1, num2 = 2){
//     return num1 + num2;
// }

// console.log(addNums(5,5));

// another way of writing funct

// const addNums = (num1 = 1, num2 = 2) => {
//     return num1 + num2;
// }

// console.log(addNums(2,3));

//3rd way

// const addNums = (num1 = 1, num2 = 1) => (num1 + num2);

// console.log(addNums(2,10));


//class for objects

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);

//     }

//     getBirthYear(){
//         return this.dob.getBirthYear();
//     }

//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //instantiate object

// const person1 = new Person('john', 'doe', '3-15-85');
// const person2 = new Person('jane', 'smith', '4-15-75');
// console.log(person1.getFullName());

//####  DOM- Document Object Model######

// ELEMENT SELECTORS

// Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('div'));

//Multiple Element
// console.log(document.querySelectorAll('.item'));

// const ul = document.querySelector('.items');

// ul.remove(); remove all ul elements
// ul.lastElementChild.remove(); remove last element in ul
// ul.firstElementChild.textContent = 'Hello'; change name in element
// ul.children[1].innerText='brad'; change 2nd element

//css changes using js

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; css changes using js

//eventlistener

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
// document.querySelector('body').classList.add('bg-dark');
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        msg.classList.add('success');
        msg.innerHTML = 'Success';
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        
        //clear list

        nameInput.value ='';
        emailInput.value = '';
        
    }
}