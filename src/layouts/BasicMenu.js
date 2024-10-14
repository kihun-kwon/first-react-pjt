import React from "react"

import {Link} from "react-router-dom"

function BasicMenu(props){
    return (
        <header className="App-header">
            header...
            <div style={{display:'flex'}}>
                <li style={{color:`${props.txcolor}`}}>{props.txname} {props.isadmin === 'Y'? <b>admin</b> : null}</li>
                <li><Link to={'/'}>Main</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/todo'}>Todo</Link></li>
                <li><Link to={'/arrayRender'}>Array Render</Link></li>
            </div>
        </header>
    );
}


export default BasicMenu;