import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Loading from '../Loading'

const TodoList = ({ setSelectedTodo, isLoading }) => {
  const todosData = useSelector((state) => state.app);
  const [todos, setTodos] = useState(todosData);
  const handleSearch = (event) => {
    const { value } = event.target;
    let filterData = todosData.filter((todo) => todo.task.includes(value));
    setTodos(filterData);
  };
  useEffect(() => {
    setTodos(todosData)
  }, [todosData])

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
      <div className="shadow-sm p-4 rounded-2 mt-4">
        <h3>List Todo</h3>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex">
            <div className="row me-3">
              <div className="col-12">
                <select
                  className="form-select"
                  name="status"
                  id="status"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setTodos(todosData);
                    } else {
                      let filterData = todosData.filter(
                        (todo) => todo.status.toString() === e.target.value
                      );
                      setTodos(filterData);
                    }
                  }}
                >
                  <option value="">Pilih Status</option>
                  <option value="true">Selesai</option>
                  <option value="false">Tidak Selesai</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <select
                  className="form-select"
                  name="kategori"
                  id="kategori"
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setTodos(todosData);
                    } else {
                      let filterData = todosData.filter(
                        (todo) => todo.category === e.target.value.toString()
                      );
                      setTodos(filterData);
                    }
                  }}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="Kantor">Kantor</option>
                  <option value="Rumah">Rumah</option>
                  <option value="Belanja">Belanja</option>
                  <option value="Dokter">Dokter</option>
                  <option value="Liburan">Liburan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>
          </div>
          <form autoComplete="off">
            <input
              //   {...register("search")}
              placeholder="search"
              className="form-control"
              type="search"
              name="search"
              id="search"
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Kategori</th>
                <th>Selesai</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => {
                return (
                  <TodoItem
                    key={todo.id}
                    index={index}
                    setSelectedTodo={setSelectedTodo}
                    todo={todo}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TodoList;

TodoList.propTypes = {
  setSelectedTodo: PropTypes.func,
  isLoading: PropTypes.bool
};
