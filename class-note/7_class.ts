class Person {
    // 클래스 선언 시 최상단에 각 속성들의 범위와 타입을 지정하여야 한다.
    private name: string;
    public age: number;
    readonly log: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}