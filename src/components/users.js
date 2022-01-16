import React, {useState} from 'react'
import users from '../Data/UsersData'
import SearchBox from "./SearchBox";

export const Users = () => {
    const [filteredData,setFilteredData] = useState(users);
    return (
    <>
        <h1
            className="text-4xl text-center
                     bg-gray-900 text-white
                       block uppercase font-bold
                       m-8 p-2 py-8
                       rounded-xl">Harasta users
        </h1>

        <SearchBox setFilteredData={setFilteredData} allData={users} placeHolder={"Search For User.."} style={"mx-8 lg:w-3/4 sm:w-1/2 p-4 rounded-md "}/>

        <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
            {filteredData.map((user) => {
                console.log("Users Filtered Data:",filteredData)
                return (
                    <div className="bg-gray-100 m-10 rounded-xl cursor-pointer transition-colors 
                                    hover:bg-gray-400 duration-500">
                        <img src={user.img} className="w-32 h-32 rounded-full mx-auto my-4" alt={user.name} />
                        <h1 className="xl:text-3xl font-semibold text-center">{user.name}</h1>
                        <h1 className="xl:text-xl m-4 block text-center">
                            <span className="text-red-600 block mb-4 uppercase">
                                {user.position}
                            </span>
                            {user.about}
                        </h1>
                    </div>
                    );
                })
            }
        </div>
    </> 
    );
};
