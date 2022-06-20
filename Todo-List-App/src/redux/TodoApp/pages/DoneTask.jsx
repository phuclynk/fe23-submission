import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../TodoList/TodoItem/TodoItem";
import ReactPaginate from 'react-paginate';

export default function DoneTask() {
    const todoList = useSelector(state => state.todo.todoList);
    const [currentItems, setCurrentItems] = useState(todoList);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + 12;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(todoList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(todoList.length / 12));
    }, [itemOffset, 12]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="list-task">
            <Items currentItems={currentItems} />
            <div className="pagination-container">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}
function Items({ currentItems }) {
    return (
        <div className="all-task">
            {currentItems &&
                currentItems.map(item =>
                (item.status === 2 ? <TodoItem
                    key={item.id}
                    {...item} /> : ""

                ))
            }
        </div>
    );
}