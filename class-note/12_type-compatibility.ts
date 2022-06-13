// 타입의 호환성을 따질 때, 타입이 어떻게 선언되었는가(예를 들어 interface 아니면 class 등으로 선언되었는가)는 따지지 않는다.
// 타입의 호환성을 객체 내부의 property와 property의 타입으로만 결정된다.

interface Person {
    name: string;
}

class PersonClass {
    name: string;
}

interface Developer {
    name: string;
    skill: string;
}

let person: Person;
let person2: Person;
let developer: Developer;
let developer2: Developer;
let developer3: Developer;

person = developer; // developer는 name property를 가지고 있기 때문에 person으로 호환된다.
// developer2 = person2; // 반면에 person2는 skill property를 가지고 있지 않기 때문에 developer2와 호환되지 않는다.
// developer3 = new PersonClass(); // 마찬가지로 PersonClass는 skill property를 가지고 있지 않기 때문에 developer3와
//                                    호환되지 않는다.

let add1 = function(a: number) {
}

let add2 = function(a: number, b: number){
}

// add1 = add2;
add2 = add1;

interface Empty<T> {
}

let empty1: Empty<number>;
let empty2: Empty<string>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

let notEmpty1: NotEmpty<number>;
let notEmpty2: NotEmpty<string>;

// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
