import { initCounter, initTodo } from "./initState";

export const counterReducer = (state = initCounter, action) => {
    switch (action.type) {
        case "UP":
            return state + action.payload;
        case "DOWN":
            return state - action.payload;
        default:
            return state;
    }
};

export const todoListReducer = (state = initTodo, action) => {
    switch (action.type) {
        case "SET":
            return {
                ...state,
                todo: action.payload
            };
        case "ADD":
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case "DELETE":
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            };
        case "TOGGLE":
            console.log(action.payload);

            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                )
            };
        case "EDIT":
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, name: action.payload.todo }
                        : item
                )
            };
        default:
            return state;
    }
};
