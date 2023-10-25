import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import React, {useState} from 'react';
import './App.css';


function App() {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([
    {id: '1', text: 'Task 1'},
    {id: '2', text: 'Task 2'},
    {id: '3', text: 'Task 3'},
  ]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newTask = {
      id: String(Math.random()),
      text: inputValue,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };


  return (
    <>
      <AddTaskForm
        value={inputValue}
        onInputChange={handleInputChange}
        onBtnClick={handleSubmit}
      />
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} onDelete={() => handleDeleteTask(task.id)}/>
      ))}
    </>
  );
}

export default App;
