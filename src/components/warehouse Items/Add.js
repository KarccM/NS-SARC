import {Field} from "../inputFiled";
import {createContext} from "react";

const warehouseAdder = createContext();

const Add = ()=>{
    return<>
        <p>مادة</p>
        <InsertMaterial options={["1","2","3"]} />
        <p>تاريخ</p>
        <p>طريق</p>
        <p>فريق</p>
        <p>وابل</p>
    </>
}
export default Add

const InsertMaterial =({options})=>{
    const field = { name: "material", type: "select", value: '', label: "المادة", options:options}
    const changeUser = () => {

    }
    return <warehouseAdder.Provider value={{changeUser}}>
        <Field field={field} style={""} section={""} Context={warehouseAdder}  />
    </warehouseAdder.Provider>
}