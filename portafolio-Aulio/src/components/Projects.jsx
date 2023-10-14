import ProjectItem from "./ProjectItem";
import ADIPWEB from "../assets/ADIPWEB.jpg";
import FoodPI from "../assets/FoodPI.jpg";
import RickAndMorty from "../assets/RickAndMorty.jpg";
import Tasks from "../assets/Tasks.jpg";

const Projects = () => {
   return (
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
         <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Proyectos
         </h1>
         <p className="text-center py-8">
            Descripcion de los proyectos que he realizado bla bla bla
         </p>
         <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={ADIPWEB} title="Adip web" />
            <ProjectItem img={FoodPI} title="Food PI web" />
            <ProjectItem img={RickAndMorty} title="Rick and Morty web" />
            <ProjectItem img={Tasks} title="Tasks web" />
         </div>
      </div>
   );
};

export default Projects;
