import React from "react"
import { Link } from "react-router-dom";

function TodoListPage(){
    return (
      <div className="App">
          <div>
            <li>title 1</li>
            <li><Link to={`read/1`} key={1}>go</Link></li>
          </div>
          <div>
            <li>title 2</li>
            <li><Link to={`read/2`} key={2}>go</Link></li>
          </div>
      </div>
    );
}

export default TodoListPage;