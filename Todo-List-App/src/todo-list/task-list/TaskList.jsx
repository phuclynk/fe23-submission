import React from "react";
import { Task } from "./task-item/Task";
import "./style.css";

export function TaskList() {
  return (
    <div className="task-list">
      <Task done={false} taskName="Test React Ant Design Todo List"></Task>
      <Task done={false} taskName="Write About React And Ant Design"></Task>
      <Task done={true} taskName="Finalize Presentation"></Task>
      <Task done={false} taskName="Book Flights To Ireland"></Task>
    </div>
  );
}
