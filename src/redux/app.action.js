export const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo
})

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: id
})

export const updateTodo = (todo) => ({
    type: "UPDATE_TODO",
    payload: todo
})

export const addTodoSaga = (todo) => ({
    type: "ADD_TODO_SAGA",
    payload: todo
})

export const deleteTodoSaga = (id) => ({
    type: "DELETE_TODO_SAGA",
    payload: id
})

export const updateTodoSaga = (todo) => ({
    type: "UPDATE_TODO_SAGA",
    payload: todo
})