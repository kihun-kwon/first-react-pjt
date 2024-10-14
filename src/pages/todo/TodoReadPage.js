import React from "react"
import { useParams } from "react-router-dom";

function TodoReadPage(){
  const {readId} = useParams();
  console.log(readId);

    return (
      <div className="App">
        Todo Read page {readId}
      </div>
    );
}

export default TodoReadPage;