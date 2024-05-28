import { useDispatch } from "react-redux";
import { deleteTodo} from "../../redux/app.action";
import PropTypes from "prop-types";
import {IconEdit, IconTrash} from '@tabler/icons-react'

const TodoItem = ({ todo, index, setSelectedTodo }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (!confirm("Apakah todo ini ingin dihapus?")) return;
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <tr>
        <td>{++index}</td>
        <td>{todo.task}</td>
        <td>{todo.category}</td>
        <td>
          <span
            className={`badge text-white ${
              todo.status ? "text-bg-success" : "text-bg-danger"
            }`}
          >
            {todo.status ? "Selesai" : "Belum Selesai"}
          </span>
        </td>
        <td>
          <div className="d-flex gap-2">
            <button
            onClick={() => setSelectedTodo(todo)}
              // onClick={() => {
              //   if (edit) {
              //     setName(todo.name);
              //     dispatch(
              //       updateTodo({
              //         ...todo,
              //         name: name,
              //       })
              //     );
              //   }
              //   setEdit(!edit);
              // }}
              className="btn btn-primary"
            >
              <IconEdit size={22} />
            </button>
            <button
              onClick={() => handleDelete({ id: todo.id })}
              className="btn btn-danger text-white"
            >
              <IconTrash size={22} />
            </button>
          </div>
        </td>
      </tr>


      {/* <div className="row mx-2 align-items-center">
        <div>{index}</div>
        <div className="col-8">
          {edit ? (
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              value={name}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            if (edit) {
              setName(todo.name);
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
            }
            setEdit(!edit);
          }}
          type="primary"
          className="mr-2"
        >
          {edit ? "Update" : "Edit"}
        </button>
        <button
          type="primary"
          onClick={() => dispatch(deleteTodo({ id: todo.id }))}
        >
          Delete
        </button>
      </div> */}
    </>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  setSelectedTodo: PropTypes.func
};
