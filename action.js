export const increase = (data) => {
    return {
        type: "UP",
        payload: data
    };
};
export const decrease = (data) => {
    return {
        type: "DOWN",
        payload: data
    };
};

export const addTodo = (data) => {
    return {
        type: "ADD",
        payload: data
    };
};
export const deleteTodo = (data) => {
    return {
        type: "DELETE",
        payload: data
    };
};
export const setTodo = (data) => {
    return {
        type: "SET",
        payload: data
    };
};
export const toggleTodo = (data) => {
    return {
        type: "TOGGLE",
        payload: data
    };
};
export const editTodo = (data) => {
    return {
        type: "EDIT",
        payload: data
    };
};
