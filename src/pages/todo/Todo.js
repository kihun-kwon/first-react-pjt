import React from "react"
import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

function Todo(){
    return (
      <BasicLayout>
      <div className="App">
        Todo page
        <div>
          <Outlet/>
        </div>
      </div>
      </BasicLayout>
    );
}

export default Todo;