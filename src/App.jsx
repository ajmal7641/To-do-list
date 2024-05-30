import './App.css'
import Todos from './components/Todos'
import EditTodoForm from './components/EditTodoForm'
import TodoForm from './components/TodoForm'
import TodoWrapper from './components/TodoWrapper'


function App() {

  return (
    <div className="App">
      <TodoWrapper/>
      {/* <TodoForm/>
      <EditTodoForm/>
      <Todos/> */}
    </div>
  )
}

export default App
