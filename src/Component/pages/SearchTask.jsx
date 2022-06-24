import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "../TodoList/TodoItem/TodoItem";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";

export default function SearchTask() {
   const todoList = useSelector((state) => state.todo.todoList);
   const params = useParams();
   const [currentItems, setCurrentItems] = useState(todoList);
   const [pageCount, setPageCount] = useState(0);

   const [itemOffset, setItemOffset] = useState(0);

   useEffect(() => {
      const endOffset = itemOffset + 12;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(todoList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(todoList.length / 12));
   }, [itemOffset, 12]);
   const handlePageClick = (event) => {
      const newOffset = event.selected;
      setItemOffset(newOffset);
   };

   return (
      <div className="list-task">
         <Items currentItems={currentItems} searchValue={params.search} />
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
function Items({ currentItems, searchValue }) {
   return (
      <div className="all-task">
         {currentItems &&
            currentItems.map((item) =>
               searchValue !== null &&
               searchValue.trim() !== "" &&
               (item.title.includes(searchValue.trim()) ||
                  item.creator.includes(searchValue.trim())) ? (
                  <TodoItem key={item.id} {...item} />
               ) : (
                  ""
               )
            )}
      </div>
   );
}
