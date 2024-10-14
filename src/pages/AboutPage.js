import React, { useState, useRef } from "react"
import BasicLayout from "../layouts/BasicLayout";

function AboutPage(){

  const [txt,chtxt] = useState({username:'',addr:''});

  const nameInput = useRef();

  const {username,addr} = txt;

  const onReset = () => {
    chtxt({username:'',addr:''});
    nameInput.current.focus();
  }

  const onchange = (e) => {
    const {value,name} = e.target;
    chtxt({...txt,[name]:value});
  }

    return (
      <BasicLayout>
      <div className="App">
        About page
        <div>
          <li>
            <input name="username" onChange={onchange} value={username} placeholder="이름" ref={nameInput}/>
            <input name="addr" onChange={onchange} value={addr} placeholder="주소"/>
          </li>
          <li>{username},{addr} <button onClick={onReset}>초기화</button></li>
        </div>
      </div>
      </BasicLayout>
    );
}

export default AboutPage;