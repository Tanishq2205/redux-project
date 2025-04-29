import ToDo from './components/Todo'
import './App.css'
import { Provider } from 'react-redux'
import { store }   from './app/store.js'
function App() {


  return (
    <>
      <Provider store={store}>
        <ToDo></ToDo>
      </Provider>
      
    </>
  )
}

export default App
