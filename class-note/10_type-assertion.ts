// 타입 단언
let a;
a = 10;
a = "a2";
let b = a as string;

// 타입 단언은 개발자가 어떤 변수의 타입에 대해 잘 알고있는 경우, 그 변수의 타입을 명시적으로 선언할 때 사용한다.
// 다음의 예에서 볼 수 있듯이 주로 DOM API에서 사용된다.
let div = document.querySelector(".container") as HTMLDivElement;
div.innerText;