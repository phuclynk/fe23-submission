import React from "react";
import { updateTodoList } from "../../slice/todoSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from 'uuid';
import { useNavigate } from "react-router-dom";

export default function AddNewTask(props) {
    const todoList = useSelector(state => state.todo.todoList);
    const navigate = useNavigate()
    // const { todoStore } = props
    // TRong todoStore cos 2 thuoc tinh
    // todoStore.todoList => todoList
    // todoStore.updateTodoList => setTodoList

    // dispatch 1 action => reducer tien hanh update state
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(updateTodoList(
            [...todoList, {
                id: v4(),
                title: data.title,
                creator: data.creator,
                createdAt: data.createdAt,
                description: data.description,
                status: 0
            }]
        ));
        reset();
        navigate(`/new-task`)
    };

    return (
        <div className="add-new-task">
            <form onSubmit={handleSubmit(onSubmit)} className="form-new-task">
                {/* register your input into the hook by invoking the "register" function */}
                <label>Title</label>
                <input label="Title" defaultValue="" placeholder="Title" {...register("title", { required: true })} />
                {errors.title && <span className="error-msg">Title is required</span>}
                <br />

                <label>Creator</label>
                <input label="Creator" defaultValue="" placeholder="Name of Creator" {...register("creator", { required: true })} />
                {errors.creator && <span className="error-msg">Creator is required</span>}
                <br />

                <label>Created at</label>
                <input label="Created at" defaultValue="" placeholder="Created at" {...register("createdAt", { required: true })} />
                {errors.createdAt && <span className="error-msg">Creation time is required</span>}
                <br />

                <label>Description</label>
                <input label="Description" defaultValue="" placeholder="Description" {...register("description", { required: true })} />
                {errors.description && <span className="error-msg">Description is required</span>}
                <br />
                <div className="action-container">
                    <button type="submit" className="button-submit">Save</button>
                </div>
            </form>
        </div>

    );
}
