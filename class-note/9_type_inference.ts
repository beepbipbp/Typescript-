// 타입 추론 기본 1
// a의 타입을 string으로 추론
let a = "a2";

// getB함수의 return값의 타입을 string으로 추론
function getB (b = 10) {
    let c = "c2";
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

// d의 value의 타입을 string으로 추론
let d: Dropdown<string> = {
    value: "d",
    title: "d2"
}

// 타입 추론 기본 3
interface Dropdown2<T>{
    value: T;
    title: string;
}

interface DetailedDropdown2<T2> extends Dropdown2<T2> {
    description: string;
    tag: T2;
}

// e의 value의 타입을 string으로 추론
let e: DetailedDropdown2<string> = {
    description: "e2",
    tag: "e3",
    value: "e4",
    title: "e5"
}

// Best Common Type
// f의 타입을 number[]로 추론
let f = [0, 1, 2];

// g의 타입을 (number | boolean)[]로 추론
let g = [0, 1, true];

// h의 타입을 (string | number | boolean)[]로 추론
let h = [0, 1, true, "h"];