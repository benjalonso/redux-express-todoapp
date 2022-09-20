import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTodoQuery, useUpdateTodoMutation } from '../redux/api/apiSlice';
import swal from "sweetalert";

const TodoInputUpdate = () => {
	const { id } = useParams()
	const navigate = useNavigate();
	const { data: todo, isFetching, isSuccess, error } = useGetTodoQuery(id);
	const [updatePost] = useUpdateTodoMutation(id);



	const [updatetodo, setUpdateTodo] = useState({
		title: "",
		description: "",
		expiration: "",
	});

	const handleChange = (e) => {
		setUpdateTodo({
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updatePost({ ...todo, id: id }).unwrap();
		navigate("/");


	};

	let content;
	if (isFetching) {
		content = <div className="text-center">
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	} else if (isSuccess) {
		content = (

			<form onSubmit={handleSubmit} className="container cajaTodo">
				<input
					name="title"
					className="todoTittleInput"
					placeholder="What are you working on?"
					type="text"
					value={updatetodo.title}
					onChange={handleChange}
					autoFocus

				/>
				<input
					name="description"
					className="todoDescriptionInput"
					placeholder="Descript the task"
					type="text"
					value={updatetodo.description}
					onChange={handleChange}
				/>
				<button
					className="addButton"
					type="submit">
					Update Task
				</button>
				<input type="date" name="expiration" placeholder="22-09-2022"
					value={updatetodo.expiration}
					onChange={handleChange}
				/>
			</form>
		)

	} else {
		content = <div>Something went wrong {error.error}</div>
	}

	return <section>{content}</section>
}

export default TodoInputUpdate;
