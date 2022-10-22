import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewTodoMutation } from "../redux/api/apiSlice";
import swal from "sweetalert";

const TodoInput = () => {
  const navigate = useNavigate();
  const [addNewTodo] = useAddNewTodoMutation();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    expiration: "",
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      todo.title !== "" ||
      todo.description !== "" ||
      todo.expiration !== ""
    ) {
      await addNewTodo({ ...todo }).unwrap();
      navigate("/");
    } else {
      swal("Always you can do something new!", "", "warning");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container ">
        <div className="card mt-5 mx-auto" style={{ width: "40rem" }}>
          <div className="card-body ">
            <div className="form-floating mb-5">
              <input
                type="text"
                name="title"
                value={todo.title}
                onChange={handleChange}
                className="form-control"
                id="floatingTitle"
              />
              <label htmlFor="floatingTitle">What are you working on?</label>
            </div>
            <div className="form-floating mb-5">
              <input
                type="text"
                name="description"
                value={todo.description}
                onChange={handleChange}
                className="form-control"
                id="floatingDescription"
              />
              <label htmlFor="floatingDescription">Describe the task</label>
            </div>
            <input
              className="mb-5 d-block float-end"
              type="date"
              name="expiration"
              value={todo.expiration}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary ">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoInput;
