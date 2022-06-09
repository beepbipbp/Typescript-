// 클래스 문법
class Person {
    constructor(name, age) {
        console.log("Person이 생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
}

// 클래스를 사용하지 않고 생성자를 이용하는 방법(ES6 이전에 사용하던 방법)
function Person2(name, age) {
    console.log("Person2가 생성 되었습니다");
    this.name = name;
    this.age = age;
}

const seho = new Person("세호", 30);
console.log(seho);

const seho2 = new Person2("세호2", 35);
console.log(seho2);