// 제네릭을 선언하게 되면, 함수를 선언할 때 인자의 타입이 결정된다.
function getLog<T>(text: T): T {
    console.log(text);
    return text;
}

const str = getLog<string>("hi"); // 이 때 str의 타입은 string이다

// 만약 똑같은 함수를 타입별로 생성할 경우, 코드가 관리하기 어려워진다.
// ex)
// function getLogString(text: string): string {
//     console.log(text);
//     return text;
// }
//
// function getLogNumber(text: number): number {
//     console.log(text);
//     return text;
// }

// 만약 인터섹션을 사용할 경우, 인터섹션에서 선언한 타입 모두를 만족하는 메소드만 사용이 가능하다.
// ex)
// function getLog(text: string | number): string | number {
//     console.log(text);
//     text. // 여기서 파라미터에 대한 메소드를 적용하려고 할 때, string과 number 타입 모두에서 사용 가능한 메소드만 쓸 수 있다.
//     return text;
// }
// const a = getLog("hi");
// a. // 마찬가지로 getLog 함수의 결과값도 string과 number 타입 모두에서 사용 가능한 메소드만 쓸 수 있다.

// 인터페이스에 제네릭 선언하기
interface DropDown<T> {
    value: T;
    selected: boolean;
}

const dropdown1: DropDown<string> = {
    value: "abc",
    selected: false
}

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[]{
    console.log(text.length);
    text.forEach(v => console.log(v));
    return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 (extends 이용)
interface LengthType {
    length: number;
}

function logLength<T extends LengthType>(something: T): T {
    console.log(something.length);
    return something;
}

logLength("abc");
logLength([1, 2, 3, 4, 5]);
logLength({ length: 10 });

// 제네릭 타입 제한 3 (keyof 이용)
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(item: T): T{
    console.log(item);
    return item;
}

getShoppingItemOption("name");
getShoppingItemOption("price");