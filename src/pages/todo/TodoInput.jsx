import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/app.action";
import { IconDeviceFloppy, IconRefresh } from "@tabler/icons-react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const options = [
  { label: "Kantor", value: "Kantor" },
  { label: "Rumah", value: "Rumah" },
  { label: "Belanja", value: "Belanja" },
  { label: "Dokter", value: "Dokter" },
  { label: "Liburan", value: "Liburan" },
  { label: "Lainnya", value: "Lainnya" },
];

const TodoInput = ({ selectedTodo, setIsLoading }) => {
  let dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: new Date().getMilliseconds().toString(),
        task: form.task,
        category: form.category,
        status: form.status,
      })
    );
  };

  const [form, setForm] = useState({
    id: "",
    task: "",
    category: "",
    status: false,
  });

  const [errors, setErrors] = useState({
    task: "",
    category: "",
  });

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (value != "") {
      setErrors({
        ...errors,
        [name]: "",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "Tugas wajib di isi",
      });
    }
  };

  const handleSelect = (event) => {
    setForm({
      ...form,
      category: event.target.value,
    });
  };

  const handleChangeStatus = (event) => {
    setForm({
      ...form,
      status: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errors.category !== "" || errors.task !== "") return;
    if (form?.id !== "") {
      console.log(form);
      dispatch(updateTodo(form));
    } else if (form?.id === "") {
      handleAddTodo();
    }
    clearForm();
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  };

  const clearForm = () => {
    setForm({
      id: "",
      task: "",
      category: "",
      status: false,
    });
  };

  useEffect(() => {
    if ("id" in selectedTodo) setForm(selectedTodo);
    setErrors({ task: "", category: "" });
  }, [selectedTodo]);

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="shadow p-4 rounded-3"
      >
        <h3>Form Todo</h3>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Tugas
          </label>
          <input
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.task && "is-invalid"}`}
            id="task"
            name="task"
            value={form.task}
          />
          <div className="invalid-feedback">{errors.task}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Kategori
          </label>
          <select id="select" value={form.category} className={`form-control ${errors.category && "is-invalid"}`} onChange={handleSelect}>
            <option value="">-- Pilih Kategori --</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errors.category}</div>
        </div>
        <div className="form-check">
          <input
            onChange={handleChangeStatus}
            className="form-check-input"
            type="checkbox"
            id="status"
            checked={form.status}
          />
          <label className="form-check-label" htmlFor="status">
            Selesai
          </label>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button
            type="submit"
            disabled={form.task === "" || form.category === ""}
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconDeviceFloppy />
            </i>
            Submit
          </button>
          <button
            onClick={clearForm}
            type="reset"
            className="btn btn-secondary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconRefresh />
            </i>
            Reset
          </button>
        </div>
      </form>

      {/* <div className="row m-2">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="col-8"
          />
          <button
            className="ml-3"
            type="primary"
            onClick={handleAddTodo}
            style={{width: "135px"}}
          >Add</button>
        </div> */}
    </>
  );
};

export default TodoInput;

TodoInput.propTypes = {
  selectedTodo: PropTypes.object,
  setIsLoading: PropTypes.func
};
