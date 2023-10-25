import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import React, {useState} from 'react';
import './App.css';


function App() {

  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState([
    {id: '1', text: 'Создать приложение - ToDo List. Внешний вид: 1', completed: true},
    {id: '2', text: 'Создать приложение - ToDo List. Внешний вид: 2', completed: false},
    {id: '3', text: 'Создать приложение - ToDo List. Внешний вид: 3', completed: false},
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
  const handleToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
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
        <Task
          key={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => handleToggleTask(task.id)}
          onDelete={() => handleDeleteTask(task.id)}/>
      ))}
    </>
  );
}

export default App;
