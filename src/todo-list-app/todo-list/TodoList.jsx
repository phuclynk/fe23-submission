import React from "react";

export default function TodoList(props) {
	return (
		<>
			<div className="todo-list"><input type="checkbox" /><span>{props.todo}</span><button>D</button><hr /></div>
		</>
	)
}