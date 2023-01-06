import { v4 as uuidv4 } from "uuid";

export const initCounter = 0;
export const initTodo = {
    list: [
        { id: uuidv4(), name: "sang", completed: true },
        { id: uuidv4(), name: "duy", completed: true },
        { id: uuidv4(), name: "duong", completed: true }
    ],
    todo: ""
};
