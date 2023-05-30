import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import './App.css'

function App() {

  return (
    < div className="container">
      <h1 className="title">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default App
