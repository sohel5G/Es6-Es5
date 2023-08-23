// // default value in a functions 

// function add(num1, num2 = 0, nam = ''){
//     return (num1 + num2) + nam;
// }
// console.log(add(10) );
// console.log(add(10, 14) );







// // Escape button use for any string 

// const mark1 = 200;
// const mark2 = 400;

// const total = `
// Your total mark1 is ${mark1} and your total mark2 is ${mark2}
// start new line also

// so kella katam

// Thank you :) 
// `;
// console.log(total);







// // Es6 Short arrow Functions 

// const funcName = function(a, b){
//     return a + b;
// }
// console.log(funcName( 20, 30) );


// const funcName2 = (a, b) => a + b;
// console.log( funcName2(20, 30) );


// const funcName3 = () => 'This is without perametar';
// console.log( funcName3() );


// const funcName4 = () => {
//     const fName = 'Sohel';
//     const lName = 'Rans';
//     const fullName  = ` My Full name is ${fName} ${lName}`;
//     return fullName;
// }
// console.log( funcName4() );

 
// // const funcName5  = (objName) => objName.age;
// const funcName5  = objName => objName.age;
// const myObj = {
//     name: 'Araf',
//     age: 4
// }
// console.log( `Araf er boyosh holo ${funcName5(myObj)} bochor` );







// Spread Operator 

// const max = [20, 40, 50, 21, 98, 54, 99];
// console.log( Math.max( ...max ) );
// console.log( ...max );

// const num1 = [20, 40, 50, 21, 98, 54, 99];
// const num2 = num1;
// const num3 = [...num1]; // Just array copy hosse
// const num4 = [...num1, 222]; // Add extra element array copy korar shomoy

// num2.push(111);
// console.log( num2 );
// console.log( num1 );
// console.log( num3 );
// console.log( num4 );








// // Destructuring

// const person = {
//     name: 'Abul',
//     job: 'Freelancer',
//     phone: '01735428325',
//     liveIn: 'Bangladesh'
// }
// // const phone = person.phone;
// // console.log( phone );

// // const {phone} = person;
// // const {phone, job, liveIn} = person;         // eksate onk guli variable hisebe use kora jay
// const {phone, job : work, liveIn} = person;     // ekane job chnage hoye work hoy gelo
// console.log(phone);
// console.log(work);
// console.log(liveIn);


// const double = (a, b, c) => [a*2, b*2, c*2];
// // const [first, second, third] = double(3, 6, 12);
// const [ , , third] = double(3, 6, 12);
// console.log( third );







// // Swap variable 
// let a = 20;
// let b = 25;

// console.log(a);
// console.log(b);

// [a, b] = [b, a]

// console.log(a);
// console.log(b);








    // const person = {
    //     name: 'Abul',
    //     job: 'Freelancer',
    //     phone: '01735428325',
    //     liveIn: 'Bangladesh'
    // }

    // // console.log( Object.keys(person) );
    // // console.log( Object.values(person) );
    // // console.log( Object.entries(person) );
    // // delete person.phone;  // Object teke delete kora 
    // // Object.freeze(person);  // freeze mane lock kore deua
    // // Object.seal(person);  // create & delete kora jabena sudu


    // const {job, ...newObjName} = person;  // job key ta bad deye new object banaise 
    // console.log( newObjName );

    // // for(per in person){
    // //     console.log( per );
    // //     console.log( person[per] );
    // // }

















    
