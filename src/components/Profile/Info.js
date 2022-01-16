export const Info = ({ user }) => {
    return <div className="col-span-3 p-4">
                <name
                    className="uppercase xl:text-4xl lg:text-2xl font-semibold"
                >{user.name}</name>
                
                <name
                    className=" text-red-500 block md:mt-2 xl:text-2xl lg:text-xl xl:my-4"
                >{user.position}</name>
                
                <name
                    className="md:mt-4 ">
                    ranking
                    <span
                        className="text-gray-900"
                    > {user.ranking}</span>
                </name>
            </div>;
}