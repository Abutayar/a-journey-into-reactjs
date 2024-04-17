export default function Aside({ openForm, projects, onSelect }) {
    return <aside className="w-1/5 bg-stone-900 py-16 rounded-tr-2xl flex flex-col px-10 gap-10">
        <h2 className="text-white uppercase font-bold text-2xl">Your Projects</h2>
        <button className="flex gap-2 align-middle bg-stone-600 py-3 px-4  rounded-md  w-fit text-stone-100" onClick={openForm}>
            <span>&#43;</span>
            <span>Add Project</span>
        </button>

        <ul>
            {projects.map((project, index) => <li onClick={() => onSelect(index)} className="cursor-pointer font-semibold px-3 py-2 text-stone-400 text-xl hover:bg-stone-800 capitalize" key={index}> {project.title}</li>)}
        </ul>
    </aside>
}