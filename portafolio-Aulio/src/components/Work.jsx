import WorkItem from "./WorkItem";
const data = [
   {
      year: 2023,
      title: "titulo",
      duration: "duracion en el trabajo",
      details: "detalle jkasdfjskfsdjksdfkj",
   },
   {
      year: 2023,
      title: "titulo",
      duration: "duracion en el trabajo",
      details: "detalle jkasdfjskfsdjksdfkj",
   },
];
const Work = () => {
   return (
      <div
         id="work"
         className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 tablet-container"
      >
         <h1 className="text-4xl font-bold text-center text-[#001b5e]">
            Trabajos
         </h1>
         {data.map((item, idx) => (
            <WorkItem
               key={idx}
               year={item.year}
               title={item.title}
               duration={item.duration}
               details={item.details}
            />
         ))}
      </div>
   );
};

export default Work;
