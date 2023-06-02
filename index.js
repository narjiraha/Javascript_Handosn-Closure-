// Q.1
// function counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// Q.2
// let count = 0;
// (function () {
//     if (count === 0) {
//         let count = 1;
//         console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
// })();


// Global, block and function:
// {
//     var p = 10;
//     let q = 20;
//     const r = 30;
//     console.log(q);  //20
//     console.log(r);   //30
// }
// console.log(p);  //Global scope


// Q.3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//     }, 1000);
// }


// Q.4
// function OuterFunction(L) {
//     function InerFunction(B) {
//         console.log(`Area: ${L * B}`)
//     }
//     InerFunction(10);
// }
// OuterFunction(20);



//Q.5
// function outerFunction() {
//     let counter = 0;

//     function innerFunction() {
//         counter++;
//         console.log(counter);
//     }

//     return innerFunction;
// }

// const incrementCounter = outerFunction();
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();

// Q.6
// var a = 12;
// (function () {
//     console.log(a);
// })();


//Q.7
// var a = 10;
// var x = (function () {
//     var a = 12;
//     return function () {
//         alert(a);
//     };
// })();
// x(); 



var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar
        );
    })(456);
})(123);

