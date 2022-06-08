// 유니온 타입
// "|"를 이용하여 A 또는 B로 타입을 선언한다.

function messageLog(value: string | number): void { // string 또는 number를 argument로 받는다
    console.log(value);
}

messageLog("aaa");
messageLog(100);

let seho: number | string | boolean;

function messageLog2(value: string | number): void {
    if(typeof value === "string"){
        value.toString();
    }
    if(typeof value === "number"){
        value.toLocaleString()
    }
    throw new TypeError("value must be string or number");
}

messageLog2("aaa");
messageLog2(100);

interface Person {
    name: string;
    age: number
}

interface Developer {
    name: string;
    skill: string
}

function askSomeone1(someone: Person | Developer) {
    someone.name = "haha" // Person과 Developer의 공통된 속성만 받을 수 있다.
    // someone.age = 30; // 오류 발생, type guard 필요
    // someone.skill = "javascript" // 오류 발생, type guard 필요
}

askSomeone1({ name: "김김김", age: 99 });
askSomeone1({ name: "이이이", skill: "java" });

// 인터섹션
// "&"을 이용하여 A 그리고 B로 타입을 선언한다.

function askSomeone2(someone: Person & Developer) {
    someone.name = "haha";
    someone.age = 30;
    someone.skill = "javascript"
}

askSomeone2({ name: "박박박", age: 34, skill: "C++" }); // Person과 Developer의 속성을 둘 다 가지는 객체