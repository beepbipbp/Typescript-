var seho = {
    age: 20,
    name: "세호"
};
function getUser(user) {
    console.log(user);
}
getUser(seho);
var sum;
sum = function (a, b) {
    return a + b;
};
var arr1 = ["a", "b", "c"];
var obj1 = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
    pdfFile: /\.pdf$/
};
// obj1[cssFile] = "abc" // 오류 발생
Object.keys(obj1).forEach(function (v) {
    console.log(v);
});
