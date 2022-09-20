import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { MdDeleteForever, MdDateRange } from "react-icons/md";
import { Link } from 'react-router-dom'

// import swal from "sweetalert";
import { useGetTodosQuery, useDeleteTodoMutation } from "../redux/api/apiSlice";

const TodoCard = () => {
    const {
        data: todos = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery(undefined, { refetchOnMountOrArgChange: true }, { refetchOnFocus: true },
        { refetchOnReconnect: true }, { refetchOnMount: true }, { refetchOnWindowFocus: true })

    const [deleteTodo] = useDeleteTodoMutation();

    const quantityOfDaysToExpire = (created, expiration) => {
        let start = new Date(created);
        let end = new Date(expiration);
        let diff = end - start;
        return diff / (1000 * 60 * 60 * 24);
    }

    let finalDesign = "cardTodos";

    const handleBackgroundCardColor = (created, expiration) => {
        if (quantityOfDaysToExpire(created, expiration) >= 7) { return finalDesign = "cardTodos cartTodosBGBlue"; }
        else if (quantityOfDaysToExpire(created, expiration) < 7 && quantityOfDaysToExpire(created, expiration) >= 3) 
        { return finalDesign = "cardTodos cartTodosBGYellow"; }
        else { return finalDesign = "cardTodos cartTodosBGRed" }
    }

    let content;
    if (isLoading) {
        content = <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else if (isSuccess) {
        content = todos.map((todo) => {
            handleBackgroundCardColor(todo.created, todo.expiration);
            return (
                <div className={finalDesign} key={todo.id}>
                    <div >
                        <h1 className="card-title ">{todo.title}</h1>
                        <h4>Start {todo.created}<MdDateRange /></h4>
                        <h4>Finish {todo.expiration}<MdDateRange /></h4>
                        <h3 className="card-text ">{todo.description}</h3>
                        <Link
                            to={`/edit-task/${todo.id}`}
                        >
                            <FaPencilAlt className="text-dark" />
                        </Link>
                        <MdDeleteForever
                            onClick={() => {
                                deleteTodo(todo.id);
                            }}
                        />

                    </div>
                </div>

            );

        })
    } else if (isError) {
        content = <div>{error.toString(error)}</div>
    }

    return (
        <>
            <Link
                to="/create-task">
                <button className="addFormButton" >
                    <HiPlusCircle className="bg-white" />
                </button>
            </Link>
            <h1 className="title">Todo's List</h1>
            {content}

        </>

    );
};

export default TodoCard;
