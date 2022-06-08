// @ts-ignore

interface Person1 {
    name: string;
    age: number
}

type Person2 = {
    name: string;
    age: number
}

const seho1: Person1 = {
    name: "세호1",
    age: 50
}

const seho2: Person2 = {
    name: "세호2",
    age: 60
}

type StringType = string;
const str1: StringType = "aaa";

type Todo = {
    id: number;
    title: string;
    done: boolean
}
const todo1: Todo = {
    id: 1,
    title: "bbb",
    done: false
}