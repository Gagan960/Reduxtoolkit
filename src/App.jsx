import './App.css'
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'
import { useSelector } from 'react-redux'

function App() {

  // const users = useSelector((state) => state.userState.users);

  return (
    <>
      <h1>Todo app</h1>
      {/* <Todolist todos={todos} /> */}
      <Todoinput  />
      <Todolist  />
    </>
  )
}

export default App
