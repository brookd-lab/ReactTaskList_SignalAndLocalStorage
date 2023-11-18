const Tasks = ({tasks, removeTask, setReminder}) => {
    
    const TaskList = () => {
        return (
                <table>
                    <tbody className="">
                       {tasks.value.map(task => {
                         return (
                              <tr className="task-input" key={task.id} onDoubleClick={() => setReminder(task.id)}>
                                <td><span className={task.reminder ? "task-reminder mb-2 mt-1" : "task mb-2 mt-1"}>&nbsp;{task.name}</span></td>
                                <td>&nbsp;</td>
                                <td className="remove" onClick={() => removeTask(task.id)}>X</td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
        )
    }

  
    return (
        <TaskList className="text-center w-100" />
    )
}

export default Tasks