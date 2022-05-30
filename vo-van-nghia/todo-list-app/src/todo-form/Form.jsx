import React, { useCallback } from "react";
import "./style.css";
import { v4 } from "uuid";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
export function Form({ input, setInput, todo, setTodo }) {
   // lấy giá trị ng` dùng nhập
   const onInputChange = (event) => {
      setInput(event.target.value);
   };
   // const onFormSubmit = (event) => {
   //    event.preventDefault();
   //    // eslint-disable-next-line eqeqeq
   //    if (input.length == "" || input.length <= 4) {
   //       alert("invalid value");
   //       return;
   //    }
   //    setTodo([...todo, { id: v4(), name: input, isCompleted: false }]);
   //    setInput("");
   // };

   const onFormSubmit = useCallback(
      (event) => {
         event.preventDefault();
         // eslint-disable-next-line eqeqeq
         // kiểm tra giá trị form có hợp lệ hay không
         if (input.length == "" || input.length <= 4) {
            alert("invalid value");
            setInput("");
            return;
         }
         // thêm giá trị người dùng đã nhập vào todolist
         // để danh sách hiện tại "todo" sau cùng để khi ng` dùng add mới thì todo đó sẽ ở trên cùng
         setTodo([{ id: v4(), name: input, isCompleted: false }, ...todo]);
         //clear input sau khi ng` dùng đã add
         setInput("");
      },
      [input, todo]
   );
   return (
      <form onSubmit={onFormSubmit} className="form flex">
         <Textfield
            type="text"
            className="form-input"
            name="basic"
            value={input}
            onChange={onInputChange}
            aria-label="default text field"
            placeholder="what need to be done here?"
         />
         <Button className="button-btn" appearance="primary" type="submit">
            Add
         </Button>
      </form>
   );
}
export default Form;
