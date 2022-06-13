interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function introduce(): Person | Developer {
    return {
        name: "tony",
        age: 30,
        skill: "making"
    };
}

let tony = introduce();

// 이 때, tony의 타입이 union type으로 정해졌으므로,
// 일반적인 경우에는 Person과 Developer 모두에 포함되는 property만 사용할 수 있다
console.log(tony.name);
// console.log(tony.age);
// console.log(tony.skill);

// 만약 age나 skill property에 접근하고 싶다면 다음과 같은 방법을 이용할 수 있다
if((tony as Person).age){
    let age = (tony as Person).age;
    console.log(age);
}
else if((tony as Developer).skill){
    let skill = (tony as Developer).skill;
    console.log(skill);
}

// 이 때, 타입 가드를 정의하여 더욱 간단하게 코드를 짤 수 있다.
function isDeveloper(target: Person | Developer): target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
    console.log(tony.skill);
}
else{
    console.log(tony.age);
}