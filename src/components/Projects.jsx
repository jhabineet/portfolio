import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="p-8" id="projects">
        <h2 className="my-10 text-center text-3xl lg:text-8xl">Projects</h2>
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
            {PROJECTS.map((project) =>(
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative mb-4 overflow-hidden rounded-lg
                    bg-white shadow-lg">
                        <img src={project.imgSrc} alt={project.title} className="h-auto w-full object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 m-8 p-8
                        text-white backdrop-blur-md">
                            <h3 className="text-3xl" >{project.title}</h3>
                            <p className="max-w-xs text-lg">{project.description}</p>

                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Projects