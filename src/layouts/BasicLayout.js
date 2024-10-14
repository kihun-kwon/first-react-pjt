import React from "react"

import BasicMenu from "../layouts/BasicMenu"
import '../App.css';

function BasicLayout({children}){
    return (
        <div className="App">
            <BasicMenu txname={"hong"} txcolor={""} isadmin={"Y"}/>
            {children}
        </div>
    );
}

export default BasicLayout;