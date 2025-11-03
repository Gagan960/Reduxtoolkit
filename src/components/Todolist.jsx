import Todoitem from "./TodoItem"
import { useSelector } from "react-redux";
function Todolist () {
      const todos = useSelector((state) => state.todos);
    return(
        <div>
            Todo list <br></br>
            {todos.map(todoItem => (
                <Todoitem key={todoItem.id} id={todoItem.id} text={todoItem.text} isCompleted={todoItem.completed} />
            ))}
        </div>
    )
}

export default Todolist;
