import React from "react";
import Add from "../add-input/AddInput";
import Panel from "../panel/panel";
import Search from "../search-input/SearchInput";
import TodoList from "../todo-list/TodoList";

export function TaskItem() {
	return (
		<>
			<div className="container">
				<Search pl="What needs to be done?"></Search>
				<Add add="Add"></Add>
				<div className="list">
					<Panel panel="Todo List"></Panel>
					<TodoList done={false} todo="Test React Ant Design Todo List"></TodoList>
					<TodoList done={false} todo="Write About React And Ant Design"></TodoList>
					<TodoList done={true} todo="Finalize Presentation"></TodoList>
					<TodoList done={false} todo="Book Flights To Ireland"></TodoList>
				</div>
			</div>
		</>
	)
}