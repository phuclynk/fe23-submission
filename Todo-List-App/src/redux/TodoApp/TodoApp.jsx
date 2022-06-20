import React, { useEffect, useState } from "react";
import { TodoAdd } from "./TodoAdd/TodoAdd";
import { TodoList } from "./TodoList/TodoList";
import "./TodoApp.css"
import { v4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { updateTodoList } from "../slice/todoSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoneTask from "./pages/DoneTask";
import AllTask from "./pages/AllTask";
import DoingTask from "./pages/DoingTask";
import NewTask from "./pages/NewTask";
import AddNewTask from "./pages/AddNewTask";
import EditTask from "./pages/EditTask";
import SideBar from "./components/SideBar";
import SearchTask from "./pages/SearchTask";

const TODO_LIST_KEY = 'TODO_LIST';

export const TodoApp = (props) => {
    // state
    const todoList = useSelector(state => state.todo.todoList);

    // dispatch 1 action => reducer tien hanh update state
    const dispatch = useDispatch();

    // const { todoStore } = props
    // TRong todoStore cos 2 thuoc tinh
    // todoStore.todoList => todoList
    // todoStore.updateTodoList => setTodoList
    // const [todoList, setTodoList] = useState([]);

    const localUpdateTodoList = (newTodolist) => {
        dispatch(updateTodoList([...newTodolist]))
    }

    // Dùng useEffect để lấy dữ liệu khởi đầu từ localStorage
    useEffect(() => {
        const storedTodoList = localStorage.getItem('TODO_LIST')
        // Lúc khởi tạo list này có thể null nên chúng ta cần check và cập nhật kiểu dữ liệu đúng cho state
        if (storedTodoList === null) {
            return;
        }

        // Vì dữ liệu được lưu ở dạng String nên muốn Javacscript hiểu được thì phải chuyển nó về dạng json rồi setState
        localUpdateTodoList(JSON.parse(storedTodoList));
    }, [])

    // Thêm todo item vào list todo item
    const handleTodoItemSubmit = (title) => {
        // Copy todo list có sẵn và thêm item mới vào đầu
        // Rồi update vào State

        // Nếu string rỗng tức là tên của task chưa được nhập vào thì return tức là không thực hiện dòng lệnh tiếp theo sau keywork "return" nữa
        if (title === '') return;

        const newTodoList = [
            {
                id: v4(),
                title,
                done: false
            },
            ...todoList,
        ]

        // Sẽ không được thực thi nếu tên task là rỗng
        localUpdateTodoList(newTodoList)

        // Sau khi thay đổi state tiến hành lưu xuống bộ nhớ của browser để khi chạy lại web những dữ liệu đã thêm vào không bị mất
        // Hàm setItem của localStorage gồm 2 tham số (từ khóa đại diện cho dữ liệu và dữ liệu)
        // tham số thứ 2 nhận vào là string nên chgúng ta tiến hành chuyển đổi từ json sang string
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    }

    // Xóa todo item khỏi list
    const handleDeleteTodoItem = (todoItemId) => {
        // Dùng hàm filter để lọc ra item muốn xóa
        const newTodoList = todoList.filter(item => item.id !== todoItemId)
        localUpdateTodoList(newTodoList)
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    }

    // Thực hiện cập nhật trạng thái của todo item
    const handleUpdateItemStatus = (todoItem) => {
        // Lặp qua các phần tử trong todoList kiểm tra xem phần tử cần cập nhật trạng thái là phần tử nào
        const newTodoList = todoList.map(item => {
            // Nếu đúng là phần tử đó 
            if (item.id === todoItem.id) {
                // thay đổi trạng thái rồi trả về item mới
                return {
                    ...item,
                    done: !todoItem.done
                }
            }

            // Còn không giữ nguyên và trả về item ban đầu
            return item
        })

        // cập nhật list chứa item đã đã thay đổi trạng thái vào state
        localUpdateTodoList([...newTodoList]);
        localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodoList));
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <SideBar></SideBar>
                    <Routes>
                        <Route path="/" element={<AllTask />} />
                        <Route path="/new-task" element={<NewTask />} />
                        <Route path="/doing-task" element={<DoingTask />} />
                        <Route path="/done-task" element={<DoneTask />} />
                        <Route path="/add-new-task" element={<AddNewTask />} />
                        <Route path="/edit-task/:id" element={<EditTask />} />
                        <Route path="/:search" element={<SearchTask />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}