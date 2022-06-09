enum Icecream1 {
    Screwbar,
    Jawsbar,
    Pigbar
}

enum Icecream2 {
    Screwbar = "스크류바",
    Jawsbar = "죠스바",
    Pigbar = "돼지바"
}

const myIcecream1 = Icecream1.Screwbar;
console.log(myIcecream1); // 0이 출력된다.

const myIcecream2 = Icecream2.Screwbar;
console.log(myIcecream2); // "스크류바"가 출력된다.

enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer: Answer): void {
    if(answer === Answer.Yes){
        console.log("맞았습니다");
    }
    else{
        console.log("틀렸습니다");
    }
}

askQuestion(Answer.Yes);