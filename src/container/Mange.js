import Sidebar from "../components/Sidebar";
import Temp from '../components/temp'
import React from "react";

const Mange = () => {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Temp />
            </div>
        </>
    );
}
export default Mange;