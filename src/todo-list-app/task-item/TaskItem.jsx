import React from "react";
import Add from "../add-input/AddInput";
import Search from "../search-input/SearchInput";
import TodoList from "../todo-list/TodoList";

export function TaskItem() {
	return (
		<>
			<div className="container">
				<Search pl="What needs to be done?"></Search>
				<Add add="Add"></Add>
				<div className="list">
					<TodoList todo="Test React Ant Design Todo List"></TodoList>
					<TodoList todo="Write About React And Ant Design"></TodoList>
					<TodoList todo="Finalize Presentation"></TodoList>
					<TodoList todo="Book Flights To Ireland"></TodoList>
				</div>
			</div>
		</>
	)
}