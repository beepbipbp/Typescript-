// 함수의 인자와 반환값에 타입을 지정
function sum(a: number, b: number): number {
    return a + b;
}

// 옵셔널 파라미터 지정
function log(a: string, b?: string){

}
log("aaa"); // b 파라미터를 지정하지 않아도 된다
log("aaa", "bbb");
