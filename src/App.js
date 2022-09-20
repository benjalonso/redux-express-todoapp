import TodoCard from './components/TodoCard';
import TodoInput from './components/TodoInput';
import TodoInputUpdate from './components/TodoImputUpdate';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoCard />} />
          <Route path="/create-task" element={<TodoInput />} />
          <Route path="/edit-task/:id" element={<TodoInputUpdate/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
