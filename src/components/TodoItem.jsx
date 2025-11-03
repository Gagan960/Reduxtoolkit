import { useDispatch } from "react-redux";
import { removeTodo } from "../Redux/slice/todoSlice";

function Todoitem({text,isCompleted,id}){
    const dispatch = useDispatch();
    const removetodo = () => {
        dispatch(removeTodo({id}));
    }
   return(
    <div>
        <input type="checkbox" checked={isCompleted}/>
        
        <p>{text}</p>
        <button onClick={removetodo}>x</button>
    </div>
   )
}
export default Todoitem