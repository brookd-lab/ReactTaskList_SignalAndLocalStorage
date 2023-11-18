import Task from "./Components/Task";
import Tasks from "./Components/Tasks";
import { effect, signal } from "@preact/signals-react";
import "./App.css";

const LOCAL_STORAGE_KEY = "localStorage"

const getTasks = () => {
  const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (items.length > 0)
    return items
  else
    return [
      { id: 1, name: "Walk the monkey", reminder: false },
      { id: 2, name: "Feed the cat", reminder: false },
    ]
}

const tasks = signal(getTasks()) 
const input = signal("")

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks.value))
})

function App() {

  const addTask = () => {
    let newTask;
    if (tasks.value.length === 0) {
      newTask = {
        id: 1,
        name: input.value,
        reminder: false,
      };
    } else
      newTask = {
        id: tasks.value[tasks.value.length - 1].id + 1,
        name: input.value,
        reminder: false,
      };
    tasks.value = [...tasks.value, newTask];
    input.value = "";
  };

  const removeTask = (id) => {
    tasks.value = (tasks.value.filter((task) => task.id !== id));
  };

  const setReminder = (id) => {
    const newTask = tasks.value.find((task) => task.id === id);
    const newTaskIndex = tasks.value.findIndex((task) => task.id === id);
    newTask.reminder = !newTask.reminder;
    const newTasks = [...tasks.value];
    newTasks[newTaskIndex] = newTask;

    tasks.value = newTasks;
  };

  return (
    <>
      <div
        className="container-fluid mt-5 text-center card border-0"
        style={{ width: "350px", height: "500px" }}
      >
        <h3 className="mb-3 card-title">
          <i>Tasks</i>
        </h3>
        <Task
          input={input}
          addTask={addTask}
          className="mb-3 card-body"
        />
        <Tasks
          tasks={tasks}
          removeTask={removeTask}
          setReminder={setReminder}
          className="text-center card-text"
        />
      </div>
    </>
  );
}

export default App;
