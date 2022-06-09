var Icecream1;
(function (Icecream1) {
    Icecream1[Icecream1["Screwbar"] = 0] = "Screwbar";
    Icecream1[Icecream1["Jawsbar"] = 1] = "Jawsbar";
    Icecream1[Icecream1["Pigbar"] = 2] = "Pigbar";
})(Icecream1 || (Icecream1 = {}));
var Icecream2;
(function (Icecream2) {
    Icecream2["Screwbar"] = "\uC2A4\uD06C\uB958\uBC14";
    Icecream2["Jawsbar"] = "\uC8E0\uC2A4\uBC14";
    Icecream2["Pigbar"] = "\uB3FC\uC9C0\uBC14";
})(Icecream2 || (Icecream2 = {}));
var myIcecream1 = Icecream1.Screwbar;
console.log(myIcecream1); // 0이 출력된다.
var myIcecream2 = Icecream2.Screwbar;
console.log(myIcecream2); // "스크류바"가 출력된다.
var Answer;
(function (Answer) {
    Answer["Yes"] = "Y";
    Answer["No"] = "N";
})(Answer || (Answer = {}));
function askQuestion(answer) {
    if (answer === Answer.Yes) {
        console.log("맞았습니다");
    }
    else {
        console.log("틀렸습니다");
    }
}
askQuestion(Answer.Yes);
