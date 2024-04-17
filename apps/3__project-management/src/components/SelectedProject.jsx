import { useRef } from "react";
import logo from "../assets/no-projects.png";
export default function SelectedProject({ openForm, project, onProjectUpdate, onDelete }) {

    if (!project) return <section className="h-full flex flex-col items-center justify-center" >
        <img src={logo} className="w-16" alt="no project icon" />
        <h2 className="text-xl font-bold text-stone-700 my-4 ">No Project Selected</h2>
        <p className="text-stone-600 mb-4">Select a Project or get started with a new one</p>
        <button className="bg-stone-900 text-white rounded-lg p-3" onClick={openForm}>Create new project</button>
    </section>



    const taskRef = useRef();
    const date = new Date(project['due-date']);

    function addTask() {
        const { value } = taskRef.current;
        if (value) {
            project.taskslist.push(value);
            taskRef.current.value = ''
            onProjectUpdate(project)
        }
    }

    return <section className="flex flex-col gap-4">
        <div>
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl">{project.title}</h2>
                <button className="hover:bg-gray-100 px-5 py-2 font-semibold" onClick={() => onDelete(project)}>Delete</button>
            </div>
            <p className="text-stone-500">{date.toLocaleString('default', { month: 'short' })} {date.getDate()}, {date.getFullYear()}</p>

        </div>
        <p>
            {project.description}
        </p>
        <hr />
        <div className="flex flex-col gap-5">
            <h3 className="font-bold text-2xl">Tasks</h3>
            <div className="flex gap-4">
                <input ref={taskRef} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
                <button className="hover:bg-gray-100 px-5 py-2 font-semibold" onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {project?.taskslist.map((task, index) => <li key={index}>task</li>)}
            </ul>
        </div>
    </section>


}