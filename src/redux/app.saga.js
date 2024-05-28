import {takeLatest, put, all, call} from 'redux-saga/effects'
import {addTodoSaga, deleteTodoSaga, updateTodoSaga} from './app.action'

export function* onAddTodoSaga({payload}){
    yield put(addTodoSaga(payload))
}

export function* onAdd(){
    yield takeLatest("ADD_TODO", onAddTodoSaga)
}

export function* onUpdateTodoSaga({payload}){
    yield put(updateTodoSaga(payload))
}

export function* onUpdate(){
    yield takeLatest("UPDATE_TODO", onUpdateTodoSaga)
}

export function* onDeleteTodoSaga({payload: {id}}){
    yield put(deleteTodoSaga(id))
}

export function* onDelete(){
    yield takeLatest("DELETE_TODO", onDeleteTodoSaga)
}

export function* todos(){
    yield all([call(onDelete), call(onAdd), call(onUpdate)])
}