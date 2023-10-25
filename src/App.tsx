import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState([
    {id: '1', text: 'Task 1'},
    {id: '2', text: 'Task 2'},
    {id: '3', text: 'Task 3'},
  ]);

  const maxId = Math.max(...tasks.map((task) => parseInt(task.id, 10)));
  const [nextId, setNextId] = useState(maxId + 1);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(event.target.value);
  };

  const handleSubmit = () => {
    if (currentTask.trim() === '') {
      return;
    }

    const newTask = {
      id: String(nextId),
      text: currentTask,
    };

    setTasks([...tasks, newTask]);
    setCurrentTask('');
    setNextId(nextId + 1);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <AddTaskForm
        inputValue={currentTask}
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
