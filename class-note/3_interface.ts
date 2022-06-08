interface User {
    age: number;
    name: string;
}

const seho: User = {
    age: 20,
    name: "세호"
}

function getUser(user: User): void {
    console.log(user);
}

getUser(seho);

interface SumFunction {
    (a: number, b: number): number
}

let sum : SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

interface StringArray {
    [index: number]: string
}

let arr1: StringArray = ["a", "b", "c"];
// arr[1] = 3 // 오류 발생

interface StringRegexpDictionary {
    [key: string]: RegExp
}

let obj1: StringRegexpDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
    pdfFile: /\.pdf$/
}

// obj1[cssFile] = "abc" // 오류 발생

Object.keys(obj1).forEach(v => {
    console.log(v);
});

interface Person {
    name: string;
    age: number
}

interface Developer extends Person {
    language: string
}

let seho2: Developer = {
    name: "세호2",
    age: 40,
    language: "javascript"
}