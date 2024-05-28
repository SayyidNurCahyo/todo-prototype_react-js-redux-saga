/* eslint-disable no-case-declarations */
import todos from './data'

const appReducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case "ADD_TODO_SAGA":
            newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos
        case "DELETE_TODO_SAGA":
            newTodos = [...state]
            newTodos = newTodos.filter((todo) => todo.id !== action.payload)
            return newTodos
        case "UPDATE_TODO_SAGA":
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++
                if(newTodos[i].id === action.payload.id) break
            }
            if(index!==-1) newTodos[index] = action.payload
            return newTodos
        default:
            return state
    }
}

export default appReducer