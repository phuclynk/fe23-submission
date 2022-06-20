import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoList } from "../../slice/todoSlice";
import { v4 } from 'uuid';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function EditTask() {
    const todoList = useSelector(state => state.todo.todoList);
    const location = useLocation();
    const navigate = useNavigate();
    const [editTask, setEditTask] = useState(location.state);
    const { register, handleSubmit, watch, reset, setValue, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const newTodoItem = {
            id: v4(),
            title: data.title,
            creator: data.creator,
            createdAt: data.createdAt,
            description: data.description,
            status: parseInt(data.status)
        };
        var todoIndex = todoList.findIndex(function (c) {
            return c.id == location.state.id;
        });
        if (todoIndex === -1) {
            return;
        }
        let newTodoList = [...todoList];
        newTodoList.splice(todoIndex, 1, newTodoItem);
        dispatch(updateTodoList(newTodoList));
        reset();
        navigate(`/`)
    };
    const onDeleteItem = () => {
        confirmAlert({
            title: 'Delete Task',
            message: 'Are you sure to delete this task',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const newTodoList = todoList.filter(item => item.id !== location.state.id)
                        dispatch(updateTodoList(newTodoList))
                        reset();
                        navigate(`/`);
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }
    const onResetItem = () => {
        setValue('title', location.state.title, { shouldDirty: false });
        setValue('creator', location.state.creator, { shouldDirty: false });
        setValue('createdAt', location.state.createdAt, { shouldDirty: false });
        setValue('description', location.state.description, { shouldDirty: false });
        setValue('status', location.state.status, { shouldDirty: false });
        setEditTask(location.state);
    }
    const onStatusChange = (e) => {
        setEditTask({ ...editTask, status: parseInt(e.currentTarget.value) });
    }

    return (
        <div className="add-new-task">
            <form onSubmit={handleSubmit(onSubmit)} className="form-new-task">
                <label>Title</label>
                <input className={`${errors.title ? "invalid-input" : "valid-input"}`} label="Title" defaultValue={editTask.title} placeholder="Title" {...register("title", { required: true })} />
                {errors.title && <span className="error-msg">Title is required</span>}
                <br />

                <label>Creator</label>
                <input className={`${errors.creator ? "invalid-input" : "valid-input"}`} label="Creator" defaultValue={editTask.creator} placeholder="Name of Creator" {...register("creator", { required: true })} />
                {errors.creator && <span className="error-msg">Creator is required</span>}
                <br />

                <label>Created at</label>
                <input type="date" className={`${errors.createdAt ? "invalid-input" : "valid-input"}`} label="Created at" defaultValue={editTask.createdAt} placeholder="Created at" {...register("createdAt", { required: true })} />
                {errors.createdAt && <span className="error-msg">Creation time is required</span>}
                <br />

                <label>Description</label>
                <input className={`${errors.description ? "invalid-input" : "valid-input"}`} label="Description" defaultValue={editTask.description} placeholder="Description" {...register("description", { required: true })} />
                {errors.description && <span className="error-msg">Description is required</span>}
                <br />
                <div className="status-container">
                    <input
                        className="radio-button-input"
                        {...register("status")}
                        type="radio"
                        name="status"
                        value="0"
                        id="status-new"
                        checked={editTask.status === 0}
                        onChange={onStatusChange}
                    />
                    <label className="radio-button-label" htmlFor="status-new">
                        New
                    </label>

                    <input
                        className="radio-button-input"
                        {...register("status")}
                        type="radio"
                        name="status"
                        value="1"
                        id="status-doing"
                        checked={editTask.status === 1}
                        onChange={onStatusChange}
                    />
                    <label className="radio-button-label" htmlFor="status-doing">
                        Doing
                    </label>

                    <input
                        className="radio-button-input"
                        {...register("status")}
                        type="radio"
                        name="status"
                        value="2"
                        id="status-done"
                        checked={editTask.status === 2}
                        onChange={onStatusChange}
                    />
                    <label className="radio-button-label" htmlFor="status-done">
                        Done
                    </label>

                </div>

                <div className="action-container">
                    <button type="submit" className="button-submit">Save</button>
                    <button type="button" onClick={onResetItem} className="button-submit">Reset</button>
                    <button type="button" onClick={onDeleteItem} className="button-submit">Delete</button>
                </div>
            </form>
        </div>

    );
}
