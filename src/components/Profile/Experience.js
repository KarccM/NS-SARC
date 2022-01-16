export const Experience = ({user}) => {
    return <div className="col-span-2 pt-4 text-center border-2 w-full h-1/3overflow-auto ">
        <h1 className="text-3xl font-bold ">Experience</h1>
        {    user.exps.map((exp) => {
                return (
                    <div className="my-8 border-2 border-gray-300 py-2">
                        <h1
                            className="font-bold text-lg"
                        ><span className="text-red-400"
                        >{exp.role}</span> In {exp.place} ,{exp.project} </h1>
                        <span
                            className=""
                        >Date : <span className="text-red-400">{exp.date}</span></span>
                    </div>);
            })
        }
    </div>;
}