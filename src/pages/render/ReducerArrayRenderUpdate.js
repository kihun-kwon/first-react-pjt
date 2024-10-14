import React, {useEffect} from "react"
import { useOutletContext, useParams } from "react-router-dom";

function ReducerArrayRenderUpdate(){

  useEffect(() => {
    //console.log('컴포넌트가 화면에 나타남');
    return () => {
      //console.log('컴포넌트가 화면에서 사라짐');
    }
  },[]);

    const {dataId} = useParams();
    //const location = useLocation();
    const {userArr,dispatch} = useOutletContext();
    const userInfo = userArr.find(user => user.id === parseInt(dataId));
    function onUpdate(event){
      dispatch({type:'UPDATE_USER',id:event.target.id.value,username:event.target.username.value,email:event.target.email.value});
      /*
      udateUser(userArr.map(user =>
        user.id === parseInt(event.target.id.value) ? {...user,username:event.target.username.value,email:event.target.email.value} : user
      ));
      */
    }
    
    return (
      <div className="App">
        수정
        <form onSubmit={(event) => {
          onUpdate(event);
          event.preventDefault();
        }}>
        <div>
          <li>
            <input type="hidden" id="id" defaultValue={userInfo.id} key={userInfo.id}/>
            <input type="text" id="username" placeholder="이름" defaultValue={userInfo.username} key={userInfo.username}/>
            <input type="text" id="email" placeholder="이메일" defaultValue={userInfo.email} key={userInfo.email}/>
          </li>
          <li><input type="submit" value="저장" /></li>
        </div>
        </form>
      </div>
    );
}

export default ReducerArrayRenderUpdate;