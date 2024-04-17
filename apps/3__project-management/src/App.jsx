import Aside from "./components/Aside"
import SelectedProject from "./components/SelectedProject"

import { useRef, useState } from "react"
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const formRef = useRef();


  function handleOpenForm() {
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const parsedData = Object.fromEntries(formData.entries());
    parsedData['taskslist'] = [];
    parsedData['id'] = projects.length
    setProjects((previousProject) => {
      return [
        ...previousProject,
        parsedData
      ]
    });
    setShowForm(false);
  }

  function handleProjectSelection(index) {
    if (index > -1) {
      handleCloseForm();
      const project = projects[index];
      if (!project) throw new Error('Project not found');
      setSelectedProject(project)
    }
  }

  function handleProjectUpdate(updatedData) {
    if (projects[updatedData.id]) {
      setProjects(previousProjects => {
        const newProjects = [...previousProjects.map(project => Object.create(project))]
        newProjects[updatedData.id] = updatedData;
        console.log(newProjects);
        return newProjects;
      }
      )
    }
  }

  function handleProjectDeletion(project) {
    if (projects[updatedData.id]) {
      setProjects(previousProjects => {
        const newProjects = [...previousProjects.map(project => Object.create(project))]
        newProjects.splice(project.id,1);
        return newProjects;
      }
      )
    }
  }

  return (
    <>
      <section className="flex flex-row mt-24 h-screen">
        <Aside openForm={handleOpenForm} projects={projects} onSelect={handleProjectSelection} />
        <main className="w-3/5 p-10">
          {showForm
            ? <Form ref={formRef} onSubmit={handleFormSubmit} onClose={handleCloseForm} />
            : <SelectedProject openForm={handleOpenForm} project={selectedProject} onProjectUpdate={handleProjectUpdate} onDelete={handleProjectDeletion} />
          }
        </main>
      </section>
    </>
  )
}

export default App
