import React from "react";
import NavBar from "./navbar";
import NavItem from "./navItems";

const NavBarFactory = ({userRole}) =>{
    let roleNav;

    switch (userRole){
        case "guest":
            console.log("Guest");
            break;
        case "warehouseManger":
            roleNav=[
                {
                    'comp' : "",
                    'label':"إضافة",
                    'link':'/add'
                },
                {
                    'comp' : "",
                    'label':"تحويل",
                    'link' :"/trans"
                },
                {
                    'comp' : "",
                    'label':"السجل",
                    'link' :"/link"
                },
            ]
            break;
        default:
            console.log("Other");
    }
    console.log("ROLE :",roleNav)
    return <>
        {
            roleNav ?
                <NavBar>
                    {roleNav.map((item)=>{
                        return <NavItem link ={item.link} label={item.label} comp={item.comp}/>
                    })}
                </NavBar>:
                <>
                </>

        }
    </>
}

export default NavBarFactory;