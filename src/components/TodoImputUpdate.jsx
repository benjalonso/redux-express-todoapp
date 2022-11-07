import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTodoQuery, useUpdateTodoMutation } from "../redux/api/apiSlice";
import swal from "sweetalert";

const TodoInputUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todo, isFetching, isSuccess, error } = useGetTodoQuery(id);
  const [updatePost] = useUpdateTodoMutation(id);

  const [updatetodo, setUpdateTodo] = useState({
    title: "",
    description: "",
    expiration: "",
  });
  console.log(todo)

  const handleChange = (e) => {
    setUpdateTodo({
      ...updatetodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(updatetodo);
    await updatePost({ ...updatetodo, id: id }).unwrap();
    navigate("/");
  };

  let content;
  if (isFetching) {
    content = (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <form onSubmit={handleSubmit} className="container ">
        <div className="card mt-5 mx-auto" style={{ width: "40rem" }}>
          <div className="card-body ">
            <div className="form-floating mb-5">
              <input
                type="text"
                name="title"
                value={updatetodo.title}
                onChange={handleChange}
                className="form-control"
                id="floatingTitle"
				placeholder={todo.title}
                autoFocus
              />
              <label htmlFor="floatingTitle">Is there something to change?</label>
            </div>
            <div className="form-floating mb-5">
              <input
                type="text"
                name="description"
                value={updatetodo.description}
                onChange={handleChange}
                className="form-control"
                id="floatingDescription"
				placeholder={todo.description}
              />
              <label htmlFor="floatingDescription">Describe the task well this time</label>
            </div>
            <input
              className="mb-5 d-block float-end"
              type="date"
              name="expiration"
              value={updatetodo.expiration}
			  placeholder={todo.expiration}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary ">
              Change task
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    content = <div>Something went wrong {error.error}</div>;
  }

  return <section>{content}</section>;
};

export default TodoInputUpdate;
