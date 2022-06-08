function messageLog(value) {
    console.log(value);
}
messageLog("aaa");
messageLog(100);
var seho;
function messageLog2(value) {
    if (typeof value === "string") {
        value.toString();
    }
    if (typeof value === "number") {
        value.toLocaleString();
    }
    throw new TypeError("value must be string or number");
}
messageLog2("aaa");
messageLog2(100);
