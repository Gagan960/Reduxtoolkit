import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/slice/todoSlice";

function Todoinput() {

   const [todo, setTodo] = useState("");
   const dispatch = useDispatch();

   const addtodotostore = () => {
       dispatch(addTodo(todo));
   }

   return (
       <div>
           <input
               type="text"
               value={todo}
               onChange={(e) => setTodo(e.target.value)}
           />
           <button onClick={addtodotostore}>Add Todo</button>
       </div>
   );
}
export default Todoinput;
 