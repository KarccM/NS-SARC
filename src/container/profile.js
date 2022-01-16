import { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import PageVisitsCard from '../Dash/components/PageVisitsCard';
import axios from 'axios'
import { fakeExps as exps } from '../Data/Fake';
import { Picture } from '../components/Profile/ProfilePicture';
import { Personal } from '../components/Profile/Personal';
import { Info } from '../components/Profile/Info';
import { Experience } from '../components/Profile/Experience';

const fakeUser = {
    'name': 'Kareem Al-Habtoor',
    'position': 'Information Technology-Artificial Intelligence',
    'ranking': 'Grand Masters',
    'exps': exps
};



export const Profile = () => {
    
    const [personalData, setPersonalData] = useState([]);
    
    useEffect(() => {

        axios.post('http://127.0.0.1:8000/api/first_personal', {}).then((res) => {
            console.log(res);
            // personal = Object.entries(res.data);
            setPersonalData(res.data);
        }).catch((e) =>
        {
            console.log(e);
        })
    },[]);


    const [bout, setBout] = useState(true);
    let { id } = useParams();
    console.log(id);
    return (
        <div className="">
            <div className="container h-screen mx-auto md:mt-11 grid bg-gray-100 mt-14 xl:px-20 xl:pt-8 overflow-auto">
                <div className="grid grid-cols-5 my-auto">
                    <Picture urlPic="" />
                    <Info user={fakeUser} />
                    <Edit />
                </div>

                <div className="grid grid-cols-5">
                    <Experience user={fakeUser}/>
                    <Details bout={bout} setBout={setBout} personalData={personalData} />
                </div>
            </div>
        </div>
    );
};

const Edit = () => {
    return <div className="col-span-1 relative">
        <button
            type="button"
            className="
            absolute top-1/2 
            bg-gray-300 text-gray-600 rounded-full px-3 
            hover:bg-red-600 hover:text-white transition-colors duration-300
            font-bold border-2 border-black
            "
        >Edit Profile</button>
    </div>
}

const Details = ({bout,setBout,personalData}) => {
    return <div className="col-span-3  col-start-3">
        <nav className="flex border-b-2 justify-center lg:justify-center gap-x-4">
            <button type="button" onClick={() => { setBout(true) }}
                className="px-4 text-red-600 border-2 bg-gray-300 hover:bg-gray-100 transition duration-500">
                Personal
            </button>
            <button type="button" onClick={() => { setBout(false) }}
                className="px-4 text-red-600 border-2 bg-gray-300 hover:bg-gray-100 transition duration-500">
                Work
            </button>
        </nav>
        {bout ? <Personal info={personalData} /> : <PageVisitsCard />}
    </div>;
}