import ToDo from './components/Todo'
import AddTask from './components/AddTask'
import './App.css'


function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTask />
      <ToDo />
    </div>
  )
}

export default App
